require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');
const token = process.env['TELEGRAM_BOT_TOKEN'];
const bot = new TelegramBot(token, {polling: true});

const state = {
	started:false,
    current_chats:[]
};

bot.onText(/\/start/, (msg) => {
    state.started = true;
    bot.sendMessage(msg.chat.id, 'Started. Possible commands are: ...');
    console.log('started');
    state.current_chats.push(msg.from.id);
});

bot.on('message', message => {
    if(state.current_chats.includes(message.from.id) && state.started === true){
        bot.sendMessage(message.chat.id, 'Answering now!');
    }else if(message.text.startsWith('/')){
    }
    else{
        bot.sendMessage(message.chat.id, 'Please start the bot with /start!');
    }
});

console.log('polling...');