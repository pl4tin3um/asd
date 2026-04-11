const kanjiDatabase = {
    "Numeros": [
        {
            title: "Números (1-5)",
            items: [
<<<<<<< HEAD
                { kanji: "一", kana: "いち", romaji: "ichi", mean: "uno" },
                { kanji: "二", kana: "ni", romaji: "dos", mean: "dos" },
                { kanji: "三", kana: "san", romaji: "tres", mean: "tres" },
                { kanji: "四", kana: "yon", romaji: "cuatro", mean: "cuatro" },
                { kanji: "五", kana: "go", romaji: "cinco", mean: "cinco" }
=======
                { kanji: "一", kana: "いち", romaji: "ichi",significado: "uno" },
                { kanji: "二", kana: "に", romaji: "ni",significado: "dos" },
                { kanji: "三", kana: "さん", romaji: "san",significado: "tres" },
                { kanji: "四", kana: "よん", romaji: "yon",significado: "cuatro" },
                { kanji: "五", kana: "ご", romaji: "go",significado: "cinco" }
>>>>>>> 794cb25527a33a4db2207c5ac4eef58fa7a37d16
            ]
        },
        {
            title: "Números (6-10)",
            items: [
<<<<<<< HEAD
                { kanji: "六", kana: "ろく", romaji: "seis", mean: "seis" },
                { kanji: "七", kana: "nana", romaji: "siete", mean: "siete" },
                { kanji: "八", kana: "hachi", romaji: "ocho", mean: "ocho" },
                { kanji: "九", kana: "kyuu", romaji: "nueve", mean: "nueve" },
                { kanji: "十", kana: "juu", romaji: "diez", mean: "diez" }
            ]
        }
=======
                { kanji: "六", kana: "ろく", romaji: "roku",significado: "seis" },
                { kanji: "七", kana: "なな", romaji: "nana",significado: "siete" },
                { kanji: "八", kana: "はち", romaji: "hachi",significado: "ocho" },
                { kanji: "九", kana: "きゅう", romaji: "kyuu",significado: "nueve" },
                { kanji: "十", kana: "じゅう", romaji: "juu",significado: "diez" }
            ]
        },
>>>>>>> 794cb25527a33a4db2207c5ac4eef58fa7a37d16
    ],
    "Naturaleza": [
        {
            title: "Elementos",
            items: [
<<<<<<< HEAD
                { kanji: "水", kana: "mizu", romaji: "mizu", mean: "agua" },
                { kanji: "火", kana: "hi", romaji: "hi", mean: "fuego" },
                { kanji: "木", kana: "ki", romaji: "ki", mean: "árbol" }
=======
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
>>>>>>> 794cb25527a33a4db2207c5ac4eef58fa7a37d16
            ]
        }

    ]
};

let selectedGroups = new Set();
let currentTab = "Numeros";
let studyQueue = [];
let currentItemIndex = 0;
let glossaryOpen = false;

function init() {
    updateTabVisuals();
    renderGroups();
}

function setTab(tab) {
    currentTab = tab;
    updateTabVisuals();
    
    if (glossaryOpen) {
        renderGlossary();
    } else {
        renderGroups();
    }
}

function updateTabVisuals() {
    const tabs = document.querySelectorAll('.tab-btn[data-cat]');
    tabs.forEach(tab => {
        if (tab.getAttribute('data-cat') === currentTab) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

function renderGroups() {
    const setup = document.getElementById('setup-screen');
    const glossary = document.getElementById('glossary-screen');
    const game = document.getElementById('game-screen');

    setup.classList.add('active-screen');
    glossary.classList.remove('active-screen');
    game.classList.remove('active-screen');

    const container = document.getElementById('groups-container');
    container.innerHTML = "";
    
    const groups = kanjiDatabase[currentTab] || [];
    groups.forEach(group => {
        const card = document.createElement('div');
        const isSelected = selectedGroups.has(group.title);
        card.className = `group-card ${isSelected ? 'selected' : ''}`;
        card.innerHTML = `
            <span class="group-title">${group.title}</span>
            <div class="kanji-mini-grid">
                ${group.items.map(k => `<div class="mini-char"><b>${k.kanji}</b><span>${k.kana}</span></div>`).join('')}
            </div>`;
        card.onclick = () => toggleGroup(group.title, card);
        container.appendChild(card);
    });
}

function renderGlossary() {
    const container = document.getElementById('glossary-container');
    container.innerHTML = "";
    const groups = kanjiDatabase[currentTab] || [];

    groups.forEach(group => {
        const card = document.createElement('div');
        card.className = 'group-card';
        card.innerHTML = `
            <span class="group-title">${currentTab} - ${group.title}</span>
            <div class="kanji-mini-grid">
                ${group.items.map(k => `
                    <div class="mini-char" style="width: 100px; height: 120px;">
                        <b style="font-size: 32px;">${k.kanji}</b>
                        <span style="font-size: 18px; color: var(--accent);">${k.mean || '---'}</span>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(card);
    });
}

function toggleGlossary() {
    const setup = document.getElementById('setup-screen');
    const glossary = document.getElementById('glossary-screen');
    const btn = document.getElementById('glossary-btn');

    glossaryOpen = !glossaryOpen;

    if (glossaryOpen) {
        setup.classList.remove('active-screen');
        glossary.classList.add('active-screen');
        btn.classList.add('active');
        renderGlossary();
    } else {
        glossary.classList.remove('active-screen');
        setup.classList.add('active-screen');
        btn.classList.remove('active');
        renderGroups();
    }
}

function toggleGroup(title, element) {
    if (selectedGroups.has(title)) { 
        selectedGroups.delete(title); 
        element.classList.remove('selected'); 
    } else { 
        selectedGroups.add(title); 
        element.classList.add('selected'); 
    }
    document.getElementById('count').innerText = selectedGroups.size;
}

function selectAll(bool) {
    const groups = kanjiDatabase[currentTab] || [];
    groups.forEach(g => bool ? selectedGroups.add(g.title) : selectedGroups.delete(g.title));
    renderGroups();
    document.getElementById('count').innerText = selectedGroups.size;
}

function startStudySession() {
    if (selectedGroups.size === 0) return alert("¡Selecciona algo!");
    studyQueue = [];
    Object.values(kanjiDatabase).flat().forEach(g => { 
        if (selectedGroups.has(g.title)) studyQueue.push(...g.items); 
    });
<<<<<<< HEAD
    studyQueue.sort(() => Math.random() - 0.5);
    currentItemIndex = 0;
=======

    // Mezclar el mazo
        sortear();

    // Cambiar de pantalla
    document.getElementById('setup-screen').classList.remove('active-screen');
    document.getElementById('game-screen').classList.add('active-screen');
>>>>>>> 794cb25527a33a4db2207c5ac4eef58fa7a37d16
    
    glossaryOpen = false; 
    document.getElementById('setup-screen').classList.remove('active-screen');
    document.getElementById('glossary-screen').classList.remove('active-screen');
    document.getElementById('game-screen').classList.add('active-screen');
    loadNextItem();
}
 function sortear() {
         studyQueue.sort(() => Math.random() - 0.5);
        currentItemIndex = 0;
 }

function loadNextItem() {
<<<<<<< HEAD
    if (currentItemIndex >= studyQueue.length) {
        alert("¡Sesión terminada!");
        location.reload();
        return;
    }
    const item = studyQueue[currentItemIndex];
    document.getElementById('current-kanji').innerText = item.kanji;
    document.getElementById('current-kana').innerText = item.kana;
=======

    const item = studyQueue[currentItemIndex];
    document.getElementById('current-kanji').innerText = item.kanji;
    document.getElementById('current-kana').innerText = item.kana;
    document.getElementById('current-significado').innerText = item.significado;
    document.getElementById('game-progress').innerText = `Kanjis restantes: ${studyQueue.length - currentItemIndex}`;
>>>>>>> 794cb25527a33a4db2207c5ac4eef58fa7a37d16
    document.getElementById('answer-input').value = "";
    document.getElementById('answer-input').focus();
    document.getElementById('game-progress').innerText = `Kanjis: ${currentItemIndex + 1} / ${studyQueue.length}`;
}

document.getElementById('answer-input')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const val = this.value.toLowerCase().trim();
        const correct = studyQueue[currentItemIndex].romaji.toLowerCase();
        const feedback = document.getElementById('feedback');
        
        if (val === correct) {
            feedback.innerText = "¡Correcto!";
            feedback.style.color = "var(--accent)";
            currentItemIndex++;
<<<<<<< HEAD
            setTimeout(() => {
                feedback.innerText = "";
                loadNextItem();
            }, 800);
=======
            if (currentItemIndex >= studyQueue.length) {
                sortear();
            }
            loadNextItem();
>>>>>>> 794cb25527a33a4db2207c5ac4eef58fa7a37d16
        } else {
            feedback.innerText = `Incorrecto. Era: ${correct}`;
            feedback.style.color = "var(--error)";
        }
    }
});

init();