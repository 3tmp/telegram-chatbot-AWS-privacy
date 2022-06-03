require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const token = process.env['TELEGRAM_BOT_TOKEN'];
const bot = new TelegramBot(token, { polling: true });
const GDPR = require('../templates/data_processing');
const common_words = require('./common_english_words');

const state = {
    current_chats: []
};

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Started. Possible commands are: ... - Please send a keyword.');
    console.log('started');
    state.current_chats.push(msg.from.id);
});

bot.on('message', message => {
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