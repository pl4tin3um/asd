const kanjiDatabase = {
    "Numeros": [
        {
            title: "Números (1-10)",
            items: [
                { kanji: "一", kana: "いち", romaji: "ichi",significado: "uno" },
                { kanji: "二", kana: "に", romaji: "ni",significado: "dos" },
                { kanji: "三", kana: "さん", romaji: "san",significado: "tres" },
                { kanji: "四", kana: "よん", romaji: "yon",significado: "cuatro" },
                { kanji: "五", kana: "ご", romaji: "go",significado: "cinco" },
                { kanji: "六", kana: "ろく", romaji: "roku",significado: "seis" },
                { kanji: "七", kana: "なな", romaji: "nana",significado: "siete" },
                { kanji: "八", kana: "はち", romaji: "hachi",significado: "ocho" },
                { kanji: "九", kana: "きゅう", romaji: "kyuu",significado: "nueve" },
                { kanji: "十", kana: "じゅう", romaji: "juu",significado: "diez" }
            ]
        }
    ],
    "Naturaleza": [
        {
            title: "Elementos",
            items: [
                { kanji: "水", kana: "みず", romaji: "mizu",significado: "agua" },
                { kanji: "火", kana: "ひ", romaji: "hi",significado: "fuego" },
                { kanji: "木", kana: "き", romaji: "ki",significado: "madera" },
                { kanji: "土", kana: "つち", romaji: "tsuchi",significado: "tierra" },
                { kanji: "金", kana: "かね", romaji: "kane",significado: "oro" }
            ]
        },
        {
            title: "Geografía",
            items: [
                { kanji: "山", kana: "やま", romaji: "yama",significado: "montaña" },
                { kanji: "川", kana: "かわ", romaji: "kawa",significado: "río" },
                { kanji: "田", kana: "た", romaji: "ta",significado: "arrozal" },
                { kanji: "石", kana: "いし", romaji: "ishi",significado: "piedra" },
                { kanji: "空", kana: "そら", romaji: "sora",significado: "cielo" }
            ]
        }
    ],
    "Tiempo": [
        {
            title: "Días de la Semana",
            items: [
                { kanji: "月", kana: "げつ", romaji: "getsu",significado: "lunes" },
                { kanji: "火", kana: "か", romaji: "ka",significado: "martes" },
                { kanji: "水", kana: "すい", romaji: "sui",significado: "miércoles" },
                { kanji: "木", kana: "もく", romaji: "moku",significado: "jueves" },
                { kanji: "金", kana: "きん", romaji: "kin",significado: "viernes" }
            ]
        }
    ],
    "Cuerpo y Personas": [
        {
            title: "Partes del Cuerpo",
            items: [
                { kanji: "目", kana: "め", romaji: "me",significado: "ojo" },
                { kanji: "耳", kana: "みみ", romaji: "mimi",significado: "oreja" },
                { kanji: "口", kana: "くち", romaji: "kuchi",significado: "boca" },
                { kanji: "手", kana: "て", romaji: "te",significado: "mano" },
                { kanji: "足", kana: "あし", romaji: "ashi",significado: "pie" }
            ]
        }
    ],
    "Direcciones": [
        {
            title: "Posiciones",
            items: [
                { kanji: "上", kana: "うえ", romaji: "ue",significado: "arriba" },
                { kanji: "下", kana: "した", romaji: "shita",significado: "abajo" },
                { kanji: "左", kana: "ひだり", romaji: "hidari",significado: "izquierda" },
                { kanji: "右", kana: "みぎ", romaji: "migi",significado: "derecha" },
                { kanji: "中", kana: "なか", romaji: "naka",significado: "centro" }
            ]
        }

    ]
};

let selectedGroups = new Set();
let currentTab = "Numeros";
let studyQueue = [];
let currentItemIndex = 0;

function init() {
    renderTabs();
    renderGroups();
}

function renderTabs() {
    const container = document.getElementById('category-tabs');
    container.innerHTML = "";
    Object.keys(kanjiDatabase).forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `tab-btn ${cat === currentTab ? 'active' : ''}`;
        btn.innerText = cat;
        btn.onclick = () => {
            currentTab = cat;
            renderTabs();
            renderGroups();
        };
        container.appendChild(btn);
    });
}

function renderGroups() {
    const container = document.getElementById('groups-container');
    container.innerHTML = "";
    
    const groups = kanjiDatabase[currentTab];
    groups.forEach(group => {
        const card = document.createElement('div');
        const isSelected = selectedGroups.has(group.title);
        card.className = `group-card ${isSelected ? 'selected' : ''}`;
        
        card.innerHTML = `
            <span class="group-title">${group.title}</span>
            <div class="kanji-mini-grid">
                ${group.items.map(k => `
                    <div class="mini-char">
                        <b>${k.kanji}</b>
                        <span>${k.kana}</span> 
                    </div>
                `).join('')}
            </div>
        `;
        
        card.onclick = () => toggleGroup(group.title, card);
        container.appendChild(card);
    });
}

function toggleGroup(title, element) {
    if (selectedGroups.has(title)) {
        selectedGroups.delete(title);
        element.classList.remove('selected');
    } else {
        selectedGroups.add(title);
        element.classList.add('selected');
    }
    updateCount();
}

function selectAll(bool) {
    const groupsInTab = kanjiDatabase[currentTab];
    groupsInTab.forEach(g => {
        if (bool) selectedGroups.add(g.title);
        else selectedGroups.delete(g.title);
    });
    renderGroups();
    updateCount();
}

function updateCount() {
    document.getElementById('count').innerText = selectedGroups.size;
}

// --- ARREGLO DEL BOTÓN ESTUDIAR ---
function startStudySession() {
    if (selectedGroups.size === 0) {
        alert("¡Selecciona al menos un grupo!");
        return;
    }

    // Llenar la cola de estudio con los items de los grupos seleccionados
    studyQueue = [];
    Object.values(kanjiDatabase).flat().forEach(group => {
        if (selectedGroups.has(group.title)) {
            studyQueue.push(...group.items);
        }
    });

    // Mezclar el mazo
        sortear();

    // Cambiar de pantalla
    document.getElementById('setup-screen').classList.remove('active-screen');
    document.getElementById('game-screen').classList.add('active-screen');
    
    loadNextItem();
}
 function sortear() {
         studyQueue.sort(() => Math.random() - 0.5);
        currentItemIndex = 0;
 }

function loadNextItem() {

    const item = studyQueue[currentItemIndex];
    document.getElementById('current-kanji').innerText = item.kanji;
    document.getElementById('current-kana').innerText = item.kana;
    document.getElementById('current-significado').innerText = item.significado;
    document.getElementById('game-progress').innerText = `Kanjis restantes: ${studyQueue.length - currentItemIndex}`;
    document.getElementById('answer-input').value = "";
    document.getElementById('answer-input').focus();
    document.getElementById('feedback').innerText = "";
}

// Escuchar la tecla Enter en el input
document.getElementById('answer-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const val = this.value.toLowerCase().trim();
        const correct = studyQueue[currentItemIndex].romaji;

        if (val === correct) {
            currentItemIndex++;
            if (currentItemIndex >= studyQueue.length) {
                sortear();
            }
            loadNextItem();
        } else {
            document.getElementById('feedback').innerText = "Incorrecto, intenta de nuevo";
            document.getElementById('feedback').style.color = "var(--error)";
        }
    }
});

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

function toggleSettings() {
    document.getElementById("settingsPanel").classList.toggle("open");
}


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


    if (savedTheme) {
        setTheme(savedTheme);
    }
});

//======================================



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

init();