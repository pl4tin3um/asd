const DATA = {
    h: {
        'Vocal': {'あ':'a','い':'i','う':'u','え':'e','お':'o'},
        'K': {'か':'ka','き':'ki','く':'ku','け':'ke','こ':'ko'},
        'S': {'さ':'sa','し':'shi','す':'su','せ':'se','そ':'so'},
        'T': {'た':'ta','ち':'chi','つ':'tsu','て':'te','と':'to'},
        'N': {'な':'na','ni':'ni','ぬ':'nu','ね':'ne','の':'no'},
        'H': {'は':'ha','ひ':'hi','ふ':'fu','へ':'he','ほ':'ho'},
        'M': {'ま':'ma','み':'mi','む':'mu','め':'me','も':'mo'},
        'Y': {'や':'ya','ゆ':'yu','よ':'yo'},
        'R': {'ら':'ra','り':'ri','る':'ru','れ':'re','ろ':'ro'},
        'W/N': {'わ':'wa','を':'wo','ん':'n'}
    },
    k: {
        'Vocal': {'ア':'a','イ':'i','ウ':'u','エ':'e','オ':'o'},
        'K': {'カ':'ka','キ':'ki','ク':'ku','ケ':'ke','コ':'ko'},
        'S': {'サ':'sa','シ':'shi','ス':'su','セ':'se','ソ':'so'},
        'T': {'タ':'ta','チ':'chi','ツ':'tsu','テ':'te','ト':'to'},
        'N': {'ナ':'na','ニ':'ni','ヌ':'nu','ネ':'ne','ノ':'no'},
        'H': {'ハ':'ha','ひ':'hi','フ':'fu','ヘ':'he','ホ':'ho'},
        'M': {'マ':'ma','ミ':'mi','ム':'mu','メ':'me','モ':'mo'},
        'Y': {'ヤ':'ya','ユ':'yu','ヨ':'yo'},
        'R': {'ラ':'ra','リ':'ri','ル':'ru','レ':'re','ロ':'ro'},
        'W/N': {'ワ':'wa','ヲ':'wo','ン':'n'}
    }
};

let tipoActual = 'h'; 
let poolActual = {};
let charActual = "";
let racha = 0;

function setTipo(t) {
    tipoActual = t;
    document.getElementById('btn-h').classList.toggle('active', t === 'h');
    document.getElementById('btn-k').classList.toggle('active', t === 'k');
}

function iniciarSesion() {
    const seleccionados = Array.from(document.querySelectorAll('.grid-checks input:checked')).map(i => i.value);
    if (seleccionados.length === 0) return alert("Selecciona al menos un grupo");

    poolActual = {};
    seleccionados.forEach(g => {
        poolActual = { ...poolActual, ...DATA[tipoActual][g] };
    });

    racha = 0;
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('juego').classList.remove('hidden');
    actualizarScore();
    nuevaPregunta();
}

function nuevaPregunta() {
    const keys = Object.keys(poolActual);
    charActual = keys[Math.floor(Math.random() * keys.length)];
    
    const input = document.getElementById('respuesta');
    input.value = "";
    document.getElementById('caracter-visual').innerText = charActual;
    input.focus();
}

function verificar() {
    const input = document.getElementById('respuesta');
    const res = input.value.trim().toLowerCase();
    const fb = document.getElementById('feedback');
    
    if (res === "") return; // Evita enviar vacío

    // Borramos el feedback anterior justo al responder
    fb.innerText = ""; 

    if (res === poolActual[charActual]) {
        racha++;
        fb.innerText = "✅";
        fb.style.color = "#10b981";
        nuevaPregunta(); 
    } else {
        racha = 0;
        fb.innerText = `❌ Era: ${poolActual[charActual]}`;
        fb.style.color = "#ef4444";
        nuevaPregunta(); 
    }
    actualizarScore();
}

function actualizarScore() {
    document.getElementById('score').innerText = `Racha: ${racha}`;
}

function volver() {
    document.getElementById('menu').classList.remove('hidden');
    document.getElementById('juego').classList.add('hidden');
    document.getElementById('feedback').innerText = "";
}

document.getElementById('respuesta').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') verificar();
});