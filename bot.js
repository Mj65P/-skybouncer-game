const TelegramBot = require('node-telegram-bot-api');

// 🔹 **توکن جدید ربات خود را جایگذاری کن**
const bot = new TelegramBot('YOUR_BOT_TOKEN', { polling: true });

// 🔹 وقتی کاربر دستور /start را می‌فرستد، این پیام و دکمه نمایش داده می‌شود.
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "🎮 خوش آمدید به SkyBouncerBot! روی دکمه‌ی زیر کلیک کن تا بازی را شروع کنی:", {
        reply_markup: {
            inline_keyboard: [
                [{ text: "🚀 شروع بازی", web_app: { url: "https://mj65p.github.io/-skybouncer-game/" } }]
            ]
        }
    });
});

// 🔹 ذخیره‌سازی امتیاز بازی که از WebApp ارسال می‌شود.
bot.on('message', (msg) => {
    if (msg.web_app_data) {
        const userScore = JSON.parse(msg.web_app_data.data).score;
        bot.sendMessage(msg.chat.id, `✅ امتیاز شما ذخیره شد: ${userScore} 🏆`);
    }
});

// 🔹 پاسخ به /help برای نمایش راهنمای بازی
bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, "ℹ️ راهنمای بازی SkyBouncer:\n- برای شروع، روی دکمه '🚀 شروع بازی' کلیک کن.\n- امتیاز شما به‌صورت خودکار ثبت خواهد شد.");
});

// 🔹 نمایش پیامی در کنسول برای اطلاع از اجرای موفق ربات
console.log("✅ Bot is running...");
