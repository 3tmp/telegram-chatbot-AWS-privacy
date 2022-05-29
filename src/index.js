require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api');
const token = process.env['TELEGRAM_BOT_TOKEN'];
const bot = new TelegramBot(token, {polling: true});

// Register listeners
bot.onText('/inlinekeyboard', message => {
    // define inline keyboard to send to user

    let optionalParams = {
        parse_mode: 'Markdown',
        reply_markup: JSON.stringify({
            inline_keyboard: [[
                { text: 'Hello', callback_data: 'hello' }
            ], [
                { text: 'Good', callback_data: 'good' },
                { text: 'Day', callback_data: 'day' }
            ], [
                { text: 'How', callback_data: 'how' },
                { text: 'Are', callback_data: 'are' },
                { text: 'You', callback_data: 'you' }
            ]
            ]
        })
    };
    // reply when user sends a message, and send him our inline keyboard as well
    bot.sendMessage(message.chat.id, 'Message received', optionalParams);
});

bot.onText('/start', edited_message => {
    // reply when user edits a message
    bot.sendMessage(edited_message.chat.id, 'Started');
});

bot.on('message', query => {
    if (query.data === 'hello') {
        bot.sendMessage(query.message.chat.id, 'Hello!');
    }
});

// Call API
bot.startPolling();

console.log('polling...');