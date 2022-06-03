require('dotenv').config();

var natural = require('natural');
//natural.PorterStemmer.attach();
var TfIdf = natural.TfIdf;


const TelegramBot = require('node-telegram-bot-api');
const token = process.env['TELEGRAM_BOT_TOKEN'];
const bot = new TelegramBot(token, { polling: true });
const GDPR = require('../templates/data_processing');
const common_words = require('./common_english_words');

const state = {
    current_chats: []
};

const tokenizedArticles = GDPR.map(article => {
    return natural.PorterStemmer.tokenizeAndStem(article.matchText);
});

bot.on('message', message => {
    if (state.current_chats.includes(message.from.id)) {
        console.log(tokenizedArticles);
        var tfidf = new TfIdf();
        var tokenizedAndStemmedMsg = natural.PorterStemmer.tokenizeAndStem(message.text);

        tokenizedArticles.forEach(tokenizedArticle => {
            tfidf.addDocument(tokenizedArticle);
        });

        var matches = [];

        tfidf.tfidfs(tokenizedAndStemmedMsg, function(i, measure) {
            matches.push({i,measure});
            console.log('document #' + i + ' is ' + measure);
        })

        matches = matches.sort(function(x,y){
            if(x['measure']>y['measure']){
                return -1;
            }
            if(x['measure']<y['measure']){
                return 1;
            }
            return 0;
        });

        matches = matches.splice(0, 5);

        console.log(matches);

        if (matches[0]['measure'] === 0) {
            bot.sendMessage(message.chat.id, 'No article found matching the given problem description.');
            return;
        }

        let output = ["We've found the following articles that match your description", ""]

        matches.forEach(m => {
            let match = GDPR[m['i']];
            output.push('*title: *' + match.name);
            output.push('*gdpr article: *' + match.gdpr_article);
            output.push("\n");
        })

        output.push('\n');
        output.push("Would you also like to see the AWS solution for the matched articles ?")
        bot.sendMessage(message.chat.id, output.join('\n'), {
            parse_mode: 'Markdown',
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Yes',
                            callback_data: "1"
                        },
                        {
                            text: 'No',
                            callback_data: '0',
                        }
                    ]
                ]
            }
        });
            
    } else if (message.text.startsWith('/')) {
        ///Put logic here that answers all possible commands
        console.log('Omitting message');
    }
    else {
        bot.sendMessage(message.chat.id, 'Please start the bot with /start!');
    }
});

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Started. Possible commands are: ... - Please send a keyword.');
    console.log('started');
    state.current_chats.push(msg.from.id);
});

bot.on('message_regex', message => {
    if (state.current_chats.includes(message.from.id)) {

        let words = message.text.match(/\S+/g).filter(word => !common_words.includes(word)).map(word => '([a-z][A-Z][0-9])*' + word + '([a-z][A-Z][0-9])*');
        if (words.length < 1) {
            bot.sendMessage(message.chat.id, 'No article found with that description');
            return;
        }

        const regex_exp = new RegExp('(' + words.join('|') + ')', 'gim');

        let matches = GDPR.map(article => {
            let m = article.matchText.match(regex_exp);
            return m && m.length > 0 ? { md: m, article: article } : null
        }).filter(m => m != null).sort((first, second) => {
            return second.md.length - first.md.length;
        }).splice(0, 5);

        if (matches.length < 1) {
            bot.sendMessage(message.chat.id, 'No article found with that description');
            return;
        }

        console.log(matches);

        let output = ["We've found the following articles that match your description", ""]
        matches.forEach(m => {
            let match = m.article;
            output.push('*title: *' + match.name);
            output.push('*gdpr article: *' + match.gdpr_article);
            output.push("\n");
        })

        output.push('\n');
        output.push("Would you also like to see the AWS solution for the matched articles ?")
        bot.sendMessage(message.chat.id, output.join('\n'), {
            parse_mode: 'Markdown',
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Yes',
                            callback_data: "1"
                        },
                        {
                            text: 'No',
                            callback_data: '0',
                        }
                    ]
                ]
            }
        });
    } else if (message.text.startsWith('/')) {
        ///Put logic here that answers all possible commands
        console.log('Omitting message');
    }
    else {
        bot.sendMessage(message.chat.id, 'Please start the bot with /start!');
    }
});

bot.onText(/\/stop/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Stopped.');
    console.log('Stopped');
    state.current_chats.pop(msg.from.id);
});



bot.onText(/\/stop/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Stopped.');
    console.log('Stopped');
    state.current_chats.pop(msg.from.id);
});

bot.on("callback_query", callback => {
    if (callback.data === '1') {
        let regex_exp = new RegExp(`title: ([A-Za-z\\t .'"]+)`, "gim");
        let match = callback.message.text.match(regex_exp);
        let names = match.map(m => m.split(': ')[1]);

        let solutions = GDPR.filter(article => names.includes(article.name));
        let output = [];
        solutions.forEach(solution => {
            output.push('*title: *' + solution.name);
            output.push('*aws solution: *' + solution.aws_solution);
            output.push("\n");
        });

        bot.sendMessage(callback.message.chat.id, output.join('\n'), {
            parse_mode: 'Markdown',
            disable_web_page_preview: true,
        });
    }
});

console.log('polling...');