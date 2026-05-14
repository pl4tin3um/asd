        //========================================================================
        //                                                                       |
        //                               KANJI                                    |
        //                                                                       |
        //========================================================================

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
                { kanji: "右", kana: "migi", romaji: "migi",significado: "derecha" },
                { kanji: "中", kana: "なか", romaji: "naka",significado: "centro" }
            ]
        }
    ]
};



        //========================================================================================//
        // --- LOGICA DE RENDERIZADO VISUAL KANJI ---
        //========================================================================================//

        let currentTab = "Numeros";

        // Inicializar SOLO si existe el contenedor Kanji
        function initVisualizerKANJI() {
            const tabs = document.getElementById('category-tabs');
            const display = document.getElementById('kanji-display-area');

            if (!tabs || !display) return;

            renderTabs();
            renderGrid();
        }

        //========================================================================================//
        // Renderizado de tabs
        function renderTabs() {
            const container = document.getElementById('category-tabs');

            if (!container) return;

            container.innerHTML = "";

            Object.keys(kanjiDatabase).forEach(cat => {
                const btn = document.createElement('button');

                btn.className = cat === currentTab ? 'active' : '';
                btn.innerText = cat;

                btn.onclick = () => {
                    currentTab = cat;

                    renderTabs();
                    renderGrid();
                };

                container.appendChild(btn);
            });
        }

        //========================================================================================//
        // Renderizado del grid Kanji
        function renderGrid() {
            const displayArea = document.getElementById('kanji-display-area');

            if (!displayArea) return;

            displayArea.innerHTML = "";

            const groups = kanjiDatabase[currentTab];

            if (!groups) return;

            groups.forEach(group => {

                // Título
                const title = document.createElement("h2");
                title.innerText = group.title;

                displayArea.appendChild(title);

                // Wrapper
                const wrapper = document.createElement("div");
                wrapper.className = "grid-wrapper";

                // Row
                const row = document.createElement("div");
                row.className = "group-row";

                // Cards
                group.items.forEach(item => {
                    const card = document.createElement("div");

                    card.className = "card";

                    card.innerHTML = `
                        <span class="char">${item.kanji}</span>
                        <span class="kana-text">${item.kana}</span>
                        <span class="meaning-text">${item.significado}</span>
                    `;

                    row.appendChild(card);
                });

                wrapper.appendChild(row);
                displayArea.appendChild(wrapper);
            });
        }

        //========================================================================================//
        // Inicialización segura
        initVisualizerKANJI();
        //========================================================================
        //                                                                       |
        //                               KANA                                    |
        //                                                                       |
        //========================================================================
        const data = {
            hBasic: [
                {c:"#f87171", s:[["あ","a"],["い","i"],["う","u"],["え","e"],["お","o"]]}, 
                {c:"#fb923c", s:[["か","ka"],["き","ki"],["く","ku"],["け","ke"],["こ","ko"]]},
                {c:"#fb923c", s:[["が","ga"],["ぎ","gi"],["ぐ","gu"],["げ","ge"],["ご","go"]]},
                {c:"#fbbf24", s:[["さ","sa"],["し","shi"],["す","su"],["せ","se"],["そ","so"]]},
                {c:"#fbbf24", s:[["ざ","za"],["じ","ji"],["ず","zu"],["ぜ","ze"],["ぞ","zo"]]},
                {c:"#4ade80", s:[["た","ta"],["ち","chi"],["つ","tsu"],["て","te"],["と","to"]]},
                {c:"#4ade80", s:[["だ","da"],["ぢ","ji"],["づ","zu"],["で","de"],["ど","do"]]},
                {c:"#2dd4bf", s:[["な","na"],["に","ni"],["ぬ","nu"],["ね","ne"],["の","no"]]},
                {c:"#38bdf8", s:[["は","ha"],["ひ","hi"],["ふ","fu"],["へ","he"],["ほ","ho"]]},
                {c:"#38bdf8", s:[["ば","ba"],["び","bi"],["ぶ","bu"],["べ","be"],["ぼ","bo"]]},
                {c:"#38bdf8", s:[["ぱ","pa"],["ぴ","pi"],["ぷ","pu"],["ぺ","pe"],["ぽ","po"]]},
                {c:"#818cf8", s:[["ま","ma"],["み","mi"],["む","mu"],["め","me"],["も","mo"]]},
                {c:"#a78bfa", s:[["や","ya"],[null,null],["ゆ","yu"],[null,null],["よ","yo"]]},
                {c:"#fb7185", s:[["ら","ra"],["り","ri"],["る","ru"],["れ","re"],["ろ","ro"]]},
                {c:"#94a3b8", s:[["わ","wa"],[null,null],[null,null],[null,null],["を","wo"]]},
                {c:"#64748b", s:[["ん","n"],[null,null],[null,null],[null,null],[null,null]]} 
            ],
            hCombo: [
                {c:"#38bdf8", s:[["きゃ","kya"],["きゅ","kyu"],["きょ","kyo"],[null,null],[null,null]]},
                {c:"#38bdf8", s:[["ぎゃ","gya"],["ぎゅ","gyu"],["ぎょ","gyo"],[null,null],[null,null]]},
                {c:"#38bdf8", s:[["しゃ","sha"],["しゅ","shu"],["しょ","sho"],[null,null],[null,null]]},
                {c:"#38bdf8", s:[["じゃ","ja"],["じゅ","ju"],["じょ","jo"],[null,null],[null,null]]},
                {c:"#38bdf8", s:[["ちゃ","cha"],["ちゅ","chu"],["ちょ","cho"],[null,null],[null,null]]},
                {c:"#38bdf8", s:[["にゃ","nya"],["にゅ","nyu"],["にょ","nyo"],[null,null],[null,null]]},
                {c:"#38bdf8", s:[["ひゃ","hya"],["ひゅ","hyu"],["ひょ","hyo"],[null,null],[null,null]]},
                {c:"#38bdf8", s:[["びゃ","bya"],["びゅ","byu"],["びょ","byo"],[null,null],[null,null]]},
                {c:"#38bdf8", s:[["ぴゃ","pya"],["ぴゅ","pyu"],["ぴょ","pyo"],[null,null],[null,null]]},
                {c:"#38bdf8", s:[["みゃ","mya"],["みゅ","myu"],["みょ","myo"],[null,null],[null,null]]},
                {c:"#38bdf8", s:[["りゃ","rya"],["りゅ","ryu"],["りょ","ryo"],[null,null],[null,null]]}
            ],
            kBasic: [
                {c:"#f87171", s:[["ア","a"],["イ","i"],["ウ","u"],["エ","e"],["オ","o"]]},
                {c:"#fb923c", s:[["カ","ka"],["キ","ki"],["ク","ku"],["ケ","ke"],["コ","ko"]]},
                {c:"#fb923c", s:[["ガ","ga"],["ギ","gi"],["グ","gu"],["ゲ","ge"],["ゴ","go"]]},
                {c:"#fbbf24", s:[["サ","sa"],["シ","shi"],["ス","su"],["セ","se"],["ソ","so"]]},
                {c:"#fbbf24", s:[["ザ","za"],["ジ","ji"],["ズ","zu"],["ゼ","ze"],["ゾ","zo"]]},
                {c:"#4ade80", s:[["タ","ta"],["チ","chi"],["ツ","tsu"],["テ","te"],["ト","to"]]},
                {c:"#4ade80", s:[["ダ","da"],["ヂ","ji"],["ヅ","zu"],["デ","de"],["ド","do"]]},
                {c:"#2dd4bf", s:[["ナ","na"],["ニ","ni"],["ヌ","nu"],["ネ","ne"],["ノ","no"]]},
                {c:"#38bdf8", s:[["ハ","ha"],["ヒ","hi"],["フ","fu"],["ヘ","he"],["ホ","ho"]]},
                {c:"#38bdf8", s:[["バ","ba"],["ビ","bi"],["ブ","bu"],["ベ","be"],["ボ","bo"]]},
                {c:"#38bdf8", s:[["パ","pa"],["ピ","pi"],["プ","pu"],["ペ","pe"],["ポ","po"]]},
                {c:"#818cf8", s:[["マ","ma"],["ミ","mi"],["ム","mu"],["メ","me"],["モ","mo"]]},
                {c:"#a78bfa", s:[["ヤ","ya"],[null,null],["ユ","yu"],[null,null],["ヨ","yo"]]},
                {c:"#fb7185", s:[["ラ","ra"],["リ","ri"],["ル","ru"],["レ","re"],["ロ","ro"]]},
                {c:"#94a3b8", s:[["ワ","wa"],[null,null],[null,null],[null,null],["ヲ","wo"]]},
                {c:"#64748b", s:[["ン","n"],[null,null],[null,null],[null,null],[null,null]]}
            ],
            kCombo: [
                {c:"#fb7185", s:[["キャ","kya"],["キュ","kyu"],["キョ","kyo"],[null,null],[null,null]]},
                {c:"#fb7185", s:[["ギャ","gya"],["ギュ","gyu"],["ギョ","gyo"],[null,null],[null,null]]},
                {c:"#fb7185", s:[["シャ","sha"],["シュ","shu"],["ショ","sho"],[null,null],[null,null]]},
                {c:"#fb7185", s:[["ジャ","ja"],["ジュ","ju"],["ジョ","jo"],[null,null],[null,null]]},
                {c:"#fb7185", s:[["チャ","cha"],["チュ","chu"],["チョ","cho"],[null,null],[null,null]]},
                {c:"#fb7185", s:[["ニャ","nya"],["ニュ","nyu"],["ニョ","nyo"],[null,null],[null,null]]},
                {c:"#fb7185", s:[["ヒャ","hya"],["ヒュ","hyu"],["ヒョ","hyo"],[null,null],[null,null]]},
                {c:"#fb7185", s:[["ビャ","bya"],["ビュ","byu"],["ビョ","byo"],[null,null],[null,null]]},
                {c:"#fb7185", s:[["ピャ","pya"],["ピュ","pyu"],["ピョ","pyo"],[null,null],[null,null]]},
                {c:"#fb7185", s:[["ミャ","mya"],["ミュ","myu"],["ミョ","myo"],[null,null],[null,null]]},
                {c:"#fb7185", s:[["リャ","rya"],["リュ","ryu"],["リョ","ryo"],[null,null],[null,null]]}
            ],
            kExtra: [
                {c:"#f472b6", s:[["ファ","fa"],["フィ","fi"],["フェ","fe"],["フォ","fo"],[null,null]]},
                {c:"#f472b6", s:[["ウィ","wi"],["ウェ","we"],["ウォ","wo"],[null,null],[null,null]]},
                {c:"#f472b6", s:[["ヴァ","va"],["ヴィ","vi"],["ヴ","vu"],["ヴェ","ve"],["ヴォ","vo"]]},
                {c:"#f472b6", s:[["シェ","she"],["ジェ","je"],["チェ","che"],[null,null],[null,null]]},
                {c:"#f472b6", s:[["ティ","ti"],["トゥ","tu"],["テュ","tyu"],[null,null],[null,null]]},
                {c:"#f472b6", s:[["ディ","di"],["ドゥ","du"],["デュ","dyu"],[null,null],[null,null]]},
                {c:"#f472b6", s:[["ツァ","tsa"],["ツィ","tsi"],["ツェ","tse"],["ツォ","tso"],[null,null]]}
            ]
        };
        //========================================================================================-->
        // === 2. FUNCIONES DE RENDERIZADO ===

        function render(id, list) {
            const container = document.getElementById(id);

            // Evita errores si el contenedor no existe en este HTML
            if (!container) return;

            container.innerHTML = "";

            list.forEach(group => {
                const row = document.createElement("div");
                row.className = "group-row";
                row.style.borderLeftColor = group.c;

                group.s.forEach(item => {
                    const card = document.createElement("div");

                    if (!item[0]) {
                        card.className = "card empty";
                    } else {
                        card.className = "card";
                        card.innerHTML = `
                            <span class="char">${item[0]}</span>
                            <span class="romaji">${item[1]}</span>
                        `;
                    }

                    row.appendChild(card);
                });

                container.appendChild(row);
            });
        }
        //========================================================================================-->
        // === 3. FUNCIONES DE INTERACCIÓN Y NAVEGACIÓN ===

        function showSection(id) {
            document.querySelectorAll('.section-container')
                .forEach(s => s.classList.add('hidden'));

            document.querySelectorAll('.menu button')
                .forEach(b => b.classList.remove('active'));

            const section = document.getElementById(id);
            const button = document.getElementById('btn-' + id);

            if (section) section.classList.remove('hidden');
            if (button) button.classList.add('active');
        }
        //========================================================================================-->
        // Renderizado inicial SOLO si existen los grids

        render("grid-h-basic", data.hBasic);
        render("grid-h-combo", data.hCombo);
        render("grid-k-basic", data.kBasic);
        render("grid-k-combo", data.kCombo);
        render("grid-k-extra", data.kExtra);

        //========================================================================
        //                                                                       |
        //                              GENERAL                                  |
        //                                                                       |
        //========================================================================
        // ===============================\\
                //SIDEBARS
        // ===============================\\
        function toggleSidebar() {
            const sidebar = document.getElementById("sidebar");
            sidebar.classList.toggle("open");
        }

        function toggleSettings() {
            document.getElementById("settingsPanel").classList.toggle("open");
        }


        // ===============================\\
                    //LOS TEMAS
         // ===============================\\

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

        // ===============================\\
                //NAVEGACION
        // ===============================\\

        const items = document.querySelectorAll('.menu-item');

        items.forEach(item => {
            item.addEventListener('click', () => {
                const texto = item.innerText.toLowerCase();

                if (texto.includes('kana')) {
                    window.location.href = 'kanastudy.html';
                } else if (texto.includes('qui')) {
                    window.location.href = 'WhoIam.html';
                }   else if (texto.includes('kanji')) {
                    window.location.href = 'kanjiStudy.html';
                }
            });
        });



// Inicializar al cargar
initVisualizerKANA();
