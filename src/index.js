require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');
const token = process.env['TELEGRAM_BOT_TOKEN'];
const bot = new TelegramBot(token, {polling: true});


const state = {
	started:false
};

bot.onText(/\/start/, (msg) => {
    console.log(msg);
    state.started = true;
    bot.sendMessage(msg.chat.id, 'Started. Possible commands are: ...');
    console.log('started');
});

bot.on('message', message => {
    if(state.started === true){
        bot.sendMessage(message.chat.id, 'Answering now!');
    }
});

console.log('polling...');