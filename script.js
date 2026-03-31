
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
    if (header) {
        header.className = `header ${theme}`;
    }
    

    localStorage.setItem('selectedTheme', theme);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem('selectedTheme');

    // Si existe un tema guardado, lo aplicamos
    if (savedTheme) {
        setTheme(savedTheme);
    }
});

//======================================


//los juegitos mamasa
const items = document.querySelectorAll('.menu-item');

items.forEach(item => {
    item.addEventListener('click', () => {
        const texto = item.innerText.toLowerCase();

        if (texto.includes('kana')) {
            window.location.href = 'kanastudy.html';
        } else if (texto.includes('who i am')) {
            window.location.href = 'WhoIam.html';
        }   else if (texto.includes('kanji')) {
            window.location.href = 'kanjiStudy.html';
        }
    });
});
//======================================
