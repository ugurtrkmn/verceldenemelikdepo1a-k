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