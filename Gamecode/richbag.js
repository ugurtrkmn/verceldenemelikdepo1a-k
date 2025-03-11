let currentIndex = 0;
const menus = document.querySelectorAll('.menu');
const buttons = document.querySelectorAll('.nav-btn');

// ilk menüyü göster
menus[currentIndex].style.display = "block";
buttons[currentIndex].classList.add("active");

//menü değiştirme fonksiyonu
function showMenu(index) {
    menus[currentIndex].style.display = "none";
    buttons[currentIndex].classList.remove("active");
    currentIndex = index;
    menus[currentIndex].style.display = "block";
    buttons[currentIndex].classList.add("active");
}
//butonlara tıklama işlevi
buttons.forEach((button, index) => {
    button.addEventListener("click", () => showMenu(index));
});


function openPollModal(text) {
    document.getElementById('pollfulltext').textContent = text;
    document.getElementById('pollmodal').style.display = 'block';
}

function closePollModal() {
    document.getElementById('pollmodal').style.display = 'none';
}

//sayfa yüklendiğinde modalı tamamen gizlemek için
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('pollmodal').style.display = 'none';
});

const TelegramBot = require('node-telegram-bot-api');

const token = '7025285706:AAHksxqSvkqq0JOnj8H5y2EM5uPWmBGyxbc';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hoşgeldin yeni dünyanın kapılarını aralamaya!');
});

const keyboard = {
    inline_keyboard: [
        [
            {
                text: "Open Web App",
                web_app: {
                    url: "https://verceldenemelikdepo1a-k.vercel.app"
                }
            }
        ]
    ]
};

//telegram bot api ye istek atarken bu nesne kullanılabilir
bot.sendMessage(chatId, "Click the button below to open the Web App ben yazdım", {
    reply_markup: keyboard
});
