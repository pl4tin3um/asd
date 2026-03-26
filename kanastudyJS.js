const DATA = {
    h: {
        'Vocal': {'あ':'a','い':'i','う':'u','え':'e','お':'o'},
        'K': {'か':'ka','き':'ki','く':'ku','け':'ke','こ':'ko'},
        'S': {'さ':'sa','し':'shi','す':'su','せ':'se','そ':'so'},
        'T': {'た':'ta','ち':'chi','つ':'tsu','て':'te','と':'to'},
        'N': {'な':'na','に':'ni','ぬ':'nu','ね':'ne','の':'no'},
        'H': {'は':'ha','ひ':'hi','ふ':'fu','へ':'he','ほ':'ho'},
        'M': {'ま':'ma','み':'mi','む':'mu','め':'me','mo':'mo'},
        'Y': {'や':'ya','ゆ':'yu','よ':'yo'},
        'R': {'ら':'ra','り':'ri','る':'ru','れ':'re','ろ':'ro'},
        'W/N': {'わ':'wa','を':'wo','ん':'n'},
        'G': {'が':'ga','ぎ':'gi','ぐ':'gu','げ':'ge','ご':'go'},
        'Z': {'ざ':'za','じ':'ji','ず':'zu','ぜ':'ze','ぞ':'zo'},
        'D': {'だ':'da','ぢ':'ji','づ':'zu',' de':'de','ど':'do'},
        'B': {'ば':'ba','び':'bi','ぶ':'bu','べ':'be','ぼ':'bo'},
        'P': {'ぱ':'pa','pi':'pi','ぷ':'pu','ぺ':'pe','ぽ':'po'},
  
        'C1': {'きゃ':'kya','きゅ':'kyu','きょ':'kyo','しゃ':'sha','しゅ':'shu'},
        'C2': {'しょ':'sho','ちゃ':'cha','ちゅ':'chu','ちょ':'cho','にゃ':'nya'},
        'C3': {'にゅ':'nyu','にょ':'nyo','ひゃ':'hya','ひゅ':'hyu','ひょ':'hyo'},
        'C4': {'みゃ':'mya','みゅ':'myu','みょ':'myo','りゃ':'rya','りゅ':'ryu'},
        'C5': {'りょ':'ryo','ぎゃ':'gya','ぎゅ':'gyu','ぎょ':'gyo','じゃ':'ja','じゅ':'ju','じょ':'jo'},
        'C6': {'びゃ':'bya','びゅ':'byu','びょ':'byo','ぴゃ':'pya','ぴゅ':'pyu','ぴょ':'pyo'},


    },
    k: {
        'Vocal': {'ア':'a','イ':'i','ウ':'u','エ':'e','オ':'o'},
        'K': {'カ':'ka','キ':'ki','ク':'ku','ケ':'ke','コ':'ko'},
        'S': {'サ':'sa','シ':'shi','ス':'su','セ':'se','ソ':'so'},
        'T': {'タ':'ta','チ':'chi','ツ':'tsu','テ':'te','ト':'to'},
        'N': {'ナ':'na','ニ':'ni','ヌ':'nu','ネ':'ne','ノ':'no'},
        'H': {'ハ':'ha','ヒ':'hi','フ':'fu','ヘ':'he','ホ':'ho'},
        'M': {'マ':'ma','ミ':'mi','ム':'mu','メ':'me','モ':'mo'},
        'Y': {'ヤ':'ya','ユ':'yu','ヨ':'yo'},
        'R': {'ラ':'ra','リ':'ri','ル':'ru','レ':'re','ロ':'ro'},
        'W/N': {'ワ':'wa','ヲ':'wo','ン':'n'},
        'G': {'ガ':'ga','ギ':'gi','グ':'gu','ゲ':'ge','ゴ':'go'},
        'Z': {'ザ':'za','ジ':'ji','ズ':'zu','ゼ':'ze','ゾ':'zo'},
        'D': {'ダ':'da','ヂ':'ji','ヅ':'zu','デ':'de','ド':'do'},
        'B': {'バ':'ba','ビ':'bi','ブ':'bu','ベ':'be','ボ':'bo'},
        'P': {'パ':'pa','pi':'pi','プ':'pu','ぺ':'pe','ポ':'po'},
      
        'C1': {'キャ':'kya','キュ':'kyu','キョ':'kyo','シャ':'sha','シュ':'shu'},
        'C2': {'ショ':'sho','チャ':'cha','チュ':'chu','チョ':'cho','ニャ':'nya'},
        'C3': {'ニュ':'nyu','ニョ':'nyo','ヒャ':'hya','ヒュ':'hyu','ヒョ':'hyo'},
        'C4': {'ミャ':'mya','ミュ':'myu','ミョ':'myo','リャ':'rya','リュ':'ryu','リョ':'ryo'},
        'C5': {'ギャ':'gya','ギュ':'gyu','ギョ':'gyo','ジャ':'ja','ジュ':'ju','ジョ':'jo'},
        'C6': {'ビゃ':'bya','ビュ':'byu','ビョ':'byo','ピャ':'pya','ピュ':'pyu','ピョ':'pyo'},

        'E1': {'ファ':'fa','フィ':'fi','フェ':'fe','フォ':'fo','ヴァ':'va','ヴィ':'vi','ヴェ':'ve','ヴォ':'vo'},
        'E2': {'ティ':'ti','トゥ':'tu','ディ':'di','ドゥ':'du','チェ':'che'},
        'E3': {'シェ':'she','ジェ':'je','ツァ':'tsa','ツェ':'tse','ツォ':'tso'}
    }
};

let tipoActual = 'h'; 
let poolActual = {};
let keysActuales = []; 
let indiceBucle = 0;   
let charActual = "";
let racha = 0;

let modoBase = 'h'; 

function setTipo(modo) {

    document.querySelectorAll('.selector-tipo button').forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-${modo}`).classList.add('active');


    const basico = document.querySelectorAll('.grupo-basico');
    const compuesto = document.querySelectorAll('.grupo-compuesto');
    const extra = document.querySelectorAll('.grupo-extra');


    [...basico, ...compuesto, ...extra].forEach(el => el.classList.add('hidden'));

    if (modo === 'h' || modo === 'k') {
        basico.forEach(el => el.classList.remove('hidden'));
        tipoActual = modo;
        modoBase = modo;
    } else if (modo === 'ch' || modo === 'ck') {
        compuesto.forEach(el => el.classList.remove('hidden'));
        tipoActual = (modo === 'ch') ? 'h' : 'k';
    } else if (modo === 'ex') {
        extra.forEach(el => el.classList.remove('hidden'));
        tipoActual = 'k';
    }
    

    seleccionarTodo(false);
}

function seleccionarTodo(estado) {

    const checkboxes = document.querySelectorAll('.grid-checks label:not(.disabled) input');
    checkboxes.forEach(cb => cb.checked = estado);
}

function iniciarSesion() {
    const seleccionados = Array.from(document.querySelectorAll('.grid-checks input:checked')).map(i => i.value);
    if (seleccionados.length === 0) return alert("Selecciona al menos un grupo");

    poolActual = {};
    seleccionados.forEach(g => {
        if (DATA[tipoActual][g]) {
            poolActual = { ...poolActual, ...DATA[tipoActual][g] };
        }
    });

    keysActuales = mezclarArray(Object.keys(poolActual)); 
    indiceBucle = 0; 
    
    racha = 0;
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('juego').classList.remove('hidden');
    actualizarScore();
    nuevaPregunta();
}

function nuevaPregunta() {

    if (indiceBucle >= keysActuales.length) {
        mezclarArray(keysActuales);
        indiceBucle = 0;
        console.log("¡Lista completada! Mezclando de nuevo...");
    }

    charActual = keysActuales[indiceBucle];
    
    document.getElementById('feedback').innerText = ""; 
    const input = document.getElementById('respuesta');
    input.value = "";
    document.getElementById('caracter-visual').innerText = charActual;
    input.focus();
}

function verificar() {
    const input = document.getElementById('respuesta');
    const res = input.value.trim().toLowerCase();
    const fb = document.getElementById('feedback');
    
    if (res === "") return;

    if (res === poolActual[charActual]) {
        racha++;
        indiceBucle++; 
        actualizarScore();
        nuevaPregunta();
    } else {
        racha = 0;
        fb.innerText = `❌ Era: ${poolActual[charActual]}`;
        fb.style.color = "#ef4444";
        actualizarScore();
        
        input.value = "";
        setTimeout(() => {
            indiceBucle++;
            nuevaPregunta();
        }, 700);
    }
}



function volver() {
    document.getElementById('menu').classList.remove('hidden');
    document.getElementById('juego').classList.add('hidden');
    document.getElementById('feedback').innerText = "";
}

document.getElementById('respuesta').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') verificar();
});

function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function actualizarScore() {
    const scoreEl = document.getElementById('score');
    if (scoreEl) {
        scoreEl.innerText = `Racha actual🔥: ${racha}`;
    }
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






