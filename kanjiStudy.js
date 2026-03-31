const kanjiDatabase = {
    "Nivel N5: Esenciales": [
        {
            title: "Números (1-5)",
            items: [
                { kanji: "一", kana: "いち", romaji: "ichi" },
                { kanji: "二", kana: "ni", romaji: "ni" },
                { kanji: "三", kana: "さん", romaji: "san" },
                { kanji: "四", kana: "よん", romaji: "yon" },
                { kanji: "五", kana: "go", romaji: "go" }
            ]
        },
        {
            title: "Números (6-10)",
            items: [
                { kanji: "六", kana: "ろく", romaji: "roku" },
                { kanji: "七", kana: "なな", romaji: "nana" },
                { kanji: "八", kana: "はち", romaji: "hachi" },
                { kanji: "九", kana: "きゅう", romaji: "kyuu" },
                { kanji: "十", kana: "じゅう", romaji: "juu" }
            ]
        },
        {
            title: "Dinero y Cantidad",
            items: [
                { kanji: "百", kana: "ひゃく", romaji: "hyaku" },
                { kanji: "千", kana: "せん", romaji: "sen" },
                { kanji: "万", kana: "まん", romaji: "man" },
                { kanji: "円", kana: "えん", romaji: "en" },
                { kanji: "半", kana: "はん", romaji: "han" }
            ]
        }
    ],
    "Naturaleza": [
        {
            title: "Elementos",
            items: [
                { kanji: "水", kana: "みず", romaji: "mizu" },
                { kanji: "火", kana: "ひ", romaji: "hi" },
                { kanji: "木", kana: "き", romaji: "ki" },
                { kanji: "土", kana: "つち", romaji: "tsuchi" },
                { kanji: "金", kana: "かね", romaji: "kane" }
            ]
        },
        {
            title: "Geografía",
            items: [
                { kanji: "山", kana: "やま", romaji: "yama" },
                { kanji: "川", kana: "かわ", romaji: "kawa" },
                { kanji: "田", kana: "た", romaji: "ta" },
                { kanji: "石", kana: "いし", romaji: "ishi" },
                { kanji: "空", kana: "そら", romaji: "sora" }
            ]
        }
    ],
    "Tiempo": [
        {
            title: "Días de la Semana",
            items: [
                { kanji: "月", kana: "げつ", romaji: "getsu" },
                { kanji: "火", kana: "か", romaji: "ka" },
                { kanji: "水", kana: "すい", romaji: "sui" },
                { kanji: "木", kana: "もく", romaji: "moku" },
                { kanji: "金", kana: "きん", romaji: "kin" }
            ]
        }
    ],
    "Cuerpo y Personas": [
        {
            title: "Partes del Cuerpo",
            items: [
                { kanji: "目", kana: "め", romaji: "me" },
                { kanji: "耳", kana: "みみ", romaji: "mimi" },
                { kanji: "口", kana: "くち", romaji: "kuchi" },
                { kanji: "手", kana: "て", romaji: "te" },
                { kanji: "足", kana: "あし", romaji: "ashi" }
            ]
        }
    ],
    "Direcciones": [
        {
            title: "Posiciones",
            items: [
                { kanji: "上", kana: "うえ", romaji: "ue" },
                { kanji: "下", kana: "した", romaji: "shita" },
                { kanji: "左", kana: "ひだり", romaji: "hidari" },
                { kanji: "右", kana: "みぎ", romaji: "migi" },
                { kanji: "中", kana: "なか", romaji: "naka" }
            ]
        }
    ]
};

let selectedGroups = new Set();
let currentTab = "Nivel N5: Esenciales";
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
    studyQueue.sort(() => Math.random() - 0.5);
    currentItemIndex = 0;

    // Cambiar de pantalla
    document.getElementById('setup-screen').classList.remove('active-screen');
    document.getElementById('game-screen').classList.add('active-screen');
    
    loadNextItem();
}

function loadNextItem() {
    if (currentItemIndex >= studyQueue.length) {
        alert("¡Has terminado la sesión!");
        location.reload();
        return;
    }

    const item = studyQueue[currentItemIndex];
    document.getElementById('current-kanji').innerText = item.kanji;
    document.getElementById('current-kana').innerText = item.kana;
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
            loadNextItem();
        } else {
            document.getElementById('feedback').innerText = "Incorrecto, intenta de nuevo";
            document.getElementById('feedback').style.color = "var(--error)";
        }
    }
});

init();