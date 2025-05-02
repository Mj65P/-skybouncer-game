const TelegramBot = require('node-telegram-bot-api');

// جایگزین کن: توکن جدید بات خودت را اینجا قرار بده!
const bot = new TelegramBot('YOUR_BOT_TOKEN', { polling: true });

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "🎮 خوش آمدید به SkyBouncerBot! روی دکمه‌ی زیر کلیک کن تا بازی را شروع کنی:", {
        reply_markup: {
            inline_keyboard: [
                [{ text: "🚀 START", web_app: { url: "https://mj65p.github.io/-skybouncer-game/" } }]
            ]
        }
    });
});

console.log("✅ Bot is running...");
