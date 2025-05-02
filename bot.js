const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const app = express();
const port = process.env.PORT || 5000;

// ایجاد ربات با توکن معتبر
const bot = new TelegramBot('7575583391:AAHqZ3bwxiKVPV2zCQouH8aZfy_b3VAdgP4', { polling: true });

// کنترل دستور /start
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "🎮 خوش آمدید به SkyBouncerBot! روی دکمه‌ی زیر کلیک کن تا بازی را شروع کنی:", {
        reply_markup: {
            inline_keyboard: [
                [{ text: "🚀 شروع بازی", web_app: { url: "https://mj65p.github.io/-skybouncer-game/" } }]
            ]
        }
    });
});

// پاسخ به تمام پیام‌ها
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text !== '/start') {
        bot.sendMessage(chatId, `✅ شما گفتید: ${msg.text}`);
    }
});

// تنظیم مسیر اصلی Express برای تست
app.get('/', (req, res) => {
    res.send('✅ Bot server is running!');
});

// راه‌اندازی سرور Express
app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
});
