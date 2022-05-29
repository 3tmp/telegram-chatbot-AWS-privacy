require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');
const token = process.env['TELEGRAM_BOT_TOKEN'];
const bot = new TelegramBot(token, {polling: true});

const state = {
    current_chats:[]
};

const INCIDENT_MATCHES = {
    dataProtectionPrinciples: /(data)[\w\s]*(protection)[\w\s]*(principles)?/ig,
    accountability: /(accountability)/ig,
    dataSecurity: /(data)[\w\s]*(security)/ig,
    dataProtectionByDesignAndByDefault: /(data)[\w\s]*(protection)[\w\s]*(design|default)/ig,
    whenYouAreAllowedToProcessData: /(allowed)?[\w\s]*(process)[\w\s]*(data)/ig,
    consent: /(consent)/ig,
    dataProtectionOfficers: /(data)[\w\s]*(protection)?[\w\s]*(officers)/ig,
    peoplesPrivacyRights: /(people)?[\w\s]*(privacy)[\w\s]*(rights)/ig
};
  
function FindIncidents(msg) {
    var incidentCounts = {};
    var incidentTypes = Object.keys(INCIDENT_MATCHES);
    
    incidentTypes.forEach(function(type) {
        if(typeof incidentCounts[type] === 'undefined') {
            incidentCounts[type] = 0;
        }
        var matchFound = msg.match(INCIDENT_MATCHES[type]);
        if(matchFound){
            incidentCounts[type] += matchFound.length;
        };
    });
    return incidentCounts;
}




bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Started. Possible commands are: ... - Please send a keyword.');
    console.log('started');
    state.current_chats.push(msg.from.id);
});

bot.on('message', message => {
    if(state.current_chats.includes(message.from.id)){
        matches = FindIncidents(msg);
        console.log(matches);
        bot.sendMessage(message.chat.id, 'Answering now!');
    }else if(message.text.startsWith('/')){
        ///Put logic here that answers all possible commands
        console.log('Omitting message');
    }
    else{
        bot.sendMessage(message.chat.id, 'Please start the bot with /start!');
    }
});

bot.onText(/\/stop/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Stopped.');
    console.log('Stopped');
    state.current_chats.pop(msg.from.id);
});


console.log('polling...');