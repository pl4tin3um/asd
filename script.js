
//costados
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

function toggleSettings() {
    document.getElementById("settingsPanel").classList.toggle("open");
}
//======================================

//los temas paaaaa
function setTheme(theme) {
    document.body.className = theme;
    const header = document.querySelector("header");
    header.className = `header ${theme}`;
    
}
//======================================


//los juegitos mamasa
const items = document.querySelectorAll('.menu-item');

items.forEach(item => {
    item.addEventListener('click', () => {
        const texto = item.innerText.toLowerCase();

        if (texto.includes('kana')) {
            window.location.href = 'kanastudy.html';
        } else if (texto.includes('kanji')) {
            window.location.href = 'kanjistudy.html';
        } else if (texto.includes('play')) {
            window.location.href = 'juego.html';
        }
        // ... y así con los demás
    });
});
//======================================
