(function () {
    "use strict"; 

    const SCARES = [
        { v: "assets/jumpscare-vid.mp4", a: "assets/audio/jumpscare.aac" },
        { v: "assets/scare/j2.mp4",      a: "assets/audio/jumpscare.aac" },
        { v: "assets/scare/j3.mp4",      a: "assets/audio/jumpscare.aac" },
        { v: "assets/scare/j4.mp4",      a: "assets/audio/jumpscare.aac" } 
    ];
const WIND_AUD = "assets/audio/n1.aac";
const BUY_AUD = "assets/audio/n4.aac";

const AMBIENCE = ["assets/audio/n3.aac", "assets/audio/n5.aac"];
const AMB_VOL = 0.4, AMB_DUCK = 0.08;

SCARES.forEach(s => { [s.v, s.a].forEach(src => { const el = src.endsWith(".mp4") ? document.createElement("video") : document.createElement("audio"); el.preload = "auto"; el.src = src; el.load(); }); });
[WIND_AUD, BUY_AUD].forEach(src => { const el = document.createElement("audio"); el.preload = "auto"; el.src = src; el.load(); });

const GAMES = [
    {
        img: "assets/img/fnaf1.jpg", year: 2014, steam:
        "https://store.steampowered.com/app/319510/Five_Nights_at_Freddys/", 
        t: "Five Nights at Freddy's", syn: { es: "El original. Eres el guardia nocturno de Freddy Fazbear's Pizza: cámaras, dos puertas y una batería que no da para más. Los animatrónicos caminan de noche; sobrevive de 12AM a 6AM.", en: "The original. You are the night guard at Freddy Fazbear's Pizza: camaras, two doors and a battery that won't last. The animatronics walk at night; survive from 12AM to 6AM." }
    },
    {
        img: "assets/img/fnaf2.jpg", year: 2014, steam:
        "https://store.steampowered.com/app/332800/Five_Nights_at_Freddys_2/",
        t: "Five Nights at Freddy's 2", syn: { es: "El local se renueva y trae juguetes nuevos... y viejos. Sin puertas: solo una máscara de Freddy, la caja de música y once caras que ya no confían en nadie.", en: "The pizzeria gets a facelift with new toys... and old ones. No doors this time: only a Freddy mask, the music box and eleven faces that trust no one," }
    },
    {
        img: "assets/img/fnaf3.avif", year: 2015, steam:
        "https://store.steampowered.com/app/354140/Five_Nights_at_Freddys_3/",
        t: "Five Nights at Freddy's 3", syn: { es: "30 años después, Fazbear's Fright abre como atracción de terror... y encuentra una verdadera reliquia: Springtrap. Uno solo. Pero el que de verdad camina.", 
            en: "30 years later , Fazbear's Fright opens as a horror attraction... and finds one true relic: Springtrap. Only one. But the one that really walks." }
    },
    {
        img: "assets/img/fnaf4.webp", year: 2015, steam:
        "https://store.steampowered.com/app/388090/Five_Nights_at_Freddys_4/",
        t: "Five Nights at Freddy's 4", syn: { es: "Adiós cámaras: aquí solo hay un niño, su habitación y pesadillas que deambulan por los pasillos y el armario. El capítulo más personal y claustrofóbico de la saga.", en: "Farewell cameras: only a boy, his bedroom and nightmares roaming the halls and the closet. The most personal and claustrophobic charper of the saga." }
    },
    {
        img: "assets/img/sl.webp", year: 2016, steam:
        "https://store.steampowered.com/app/506610/Five_Nights_at_Freddys_Sister_Location/", 
        t: "Sister Location", syn: { es: "Debajo de la superficie está Circus Baby's Entertainment and Rental: un circo helado de plataformas, tuberías y animatrónicos hablantes. Escuchar lo que dice Baby podría salvarte la vida... o sellarte.", en: "Beneath the surface lies Circus Baby's Entertainment and Rental: a frozen circus of catwalks, pipes and talking animatronics. Listening to Baby may save you... or seal you." }
    },
    {
        img: "assets/img/breach.jpg", year: 2021, steam:
        "https://store.steampowered.com/app/747190/Five_Nights_at_Freddys_Security_Breach/",
        t: "Security Breach", syn: { es: "El Mega Pizzaplex en 3D: Gregory, atrapado de noche, recorre el centro comercial con la ayuda de Freddy mismo. Corre, róbate disfraces y escapa de Vanny antes del amanecer.", en: "The Mega Pizzaplex in 3D: Gregory, trapped overnight, roams the mall whit Freddy himself at his side. Run, steal disguises and escape Vanny before dawn." }
    },
    {
        img: "assets/img/pit.jpg", year: 2024, steam:
        "https://store.steampowered.com/app/2638370/Five_Nights_at_Freddys_Into_the_Pit/",
        t: "Into the Pit", syn: { es: "Oswald salta a la fosa de pelotas de una pizzeria abandonada... y emerge en 1985. Un conejo amarillo se ha vestido de su padre. Aventura 2D de puzzle y persecución.", en: "Oswald leaps into the ball pit of a rundown pizzeria.. and emerges in 1985. A yellow rabbit has dressed as his father. A 2D puzzle-chase adventure." } 
    },
    {
        img: "assets/img/mimic.jpg", year: 2025, steam:
        "https://store.steampowered.com/app/2515390/FIVE_NIGHTS_AT_FREDDYS_SECRET_OF_THE_MIMIC/",
        t: "Secret of the Mimic", syn: { es: "La mansión de disfraces de Murray quedó abandonada con todo su secreto dentro: el Mimic, que copia voces, gestos y a los trabajadores. Escapad de la casa con lo que sea que no haya aprendido a copiar.", en: "Murray's Costume Manor lies abandoned, still hiding its secret: the Mimic, wich copies voices, gestures and workers alike. Escape the house with whatever it hasn't yet learned to mimic." }
    }
];

const I18N = {
    es: {
        doc: "FNAF - ¿Te atreves a vigilar?",
        nav1: "HISTORIA", nav2: "LA SAGA", nav3: "EL CREADOR",
        kicker: "LOCAL DE FREDDY FAZBEAR - RECORTE DE CÁMARA 07",
        title: "¿TE ATREVES A VIGILAR?",
        tag: "Un homenaje aterrador a Five Nights at Freddy's.<br/>Deja el sonido encendido. Baja la luz. Y no dejes morir la caja...",
        boxTitle: "CAJA DE MÚSICA",
        boxWind: "MANTÉN PRESIONADO PARA DAR CUERDA",
        boxStop: "LA CAJA SE DETUVO...",
        boxLow: "se acabo la cuerda...",
        night: "NOCHE",
        loreTitle: "HISTORIA Y LORE",
        loreCap: "EL PLANO DEL LOCAL. APRÉNDELO DE LA MEMORIA. TE AYUDARÁ A SOBREVIVIR.",
        loreP1: "Todo empezó en un pequeño restaurante familiar: Fredbear's Family Diner, y después Freddy Fazbear's Pizza, donde los animatrónicos cantaban y servían pizza a los niños. Pero hay algo dentro de los disfraces que aprendió a caminar sin nadie dentro.",
        loreP2: "Cinco niños desaparecieron en una fiesta. Un hombre de traje morado los llevó a la trastienda y nunca salieron con vida. Las búsquedas se apagaron, los periódicos siguieron se camino... y el local reabrió una y otra vez, como si nada.",
        loreP3: "Un animatrónico arrancó el cráneo de un empleado: fue la Mordida del 87. Los locales cerraron, la franquicia se derrumbó. Pero ese mal siguió vivo en cada traje abandonado, en cada caja sellada, en cada pesadilla.",
        loreP4: "Los guardias nocturnos son la historia de los que aguantan sentados: camáras, puertas y energía. Si un animatrónico te atrapa, no hay sangre ni gritos en el informe: la oficina queda vacía y nadie parece recordar que trabajabas ahí.",
        sagaTitle: "LA SAGA",
        sagaIntro: "Una saga con más de una década de sustos. Estos son los ocho juegos principales, con su año, su imagen y dónde comprar cada uno:",
        sagaNote: "Los enlaces abren Steam, la tienda oficial de PC donde la saga vive desde el principio.",
        creTitle: "EL CREADOR",
        creP1: "Detrás de todo está Scott Cawthon: desarrollador independiente, cristiano y padre de familia, que llevaba años publicando juegos discretísimos. Le dijeron una vez que sus personajes parecían animatrónicos aterradores... y en vez de ofenderse, tomó nota.",
        creP2: "Así, casi por casualidad, el 8 de agosto de 2014 nació Five Nights at Freddy's. En semanas fue un fenómeno mundial: secuelas, novelas, la película y millones de fans. Desde ScottGames dirigió la saga hasta 2021, cuando dio un paso atrás para estar con su familia, dejando el legado a estudios como Steel Wool y a la comunidad que nunca dejó de vigilar.",
        grTitle: "AGRADECIMIENTO A SCOTT",
        grCap: "MY DAY AT THE NEW FREDDY FAZBEAR'S PIZZERIA",
        grTxt: "Gracias, Scott Cawthon. Por Freddy, por Springtrap, por la caja de música y por las 6 AM. Por demostrar que un juego hecho con cariño en un garaje puede asustar al mundo entero... y encantarlo más todavía. Estas noches no serían nada sin ti. <b>Gracias por una década de noches imposibles de olvidar.</b>",
        disclaim: "Página de fans no oficial, sin afiliación con ScottGames ni Scott Cawthon. Hecho con terror y cariño.",
        jsHint: "TOCA PARA ESCAPAR",
        buyFrom: "COMPRAR EN STEAM",
        words: ["SIEMPRE VUELVE", "NO PARPADEES", "TE ESTÁ MIRANDO", "LA CÁMARA MIENTE",
            "ESTABA DENTRO TODO EL RATO", "NO TE DUERMAS", "ÉL TIENE HAMBRE", "6:00 AM NUNCA LLEGA", "MIRA ATRÁS", "LA CAJA DEJÓ DE SONAR", "FALTAN 5 HORAS"]
    },
    en: {
        doc: "FNAF - Do you dare to watch?",
        nav1: "STORY", nav2: "THE SAGA", nav3: "THE CREATOR",
        kicker: "FREDDY FAZBEAR'S PIZZA - CAMERA FEED 07",
        title: "DO YOU DARE TO WATCH?",
        tag: "A terrifying tribute to Five Nights at Freddy's.<br/>Keep the sound on. Dim the lights. And don't let the box die...",
        boxTitle: "MUSIC BOX",
        boxWind: "HOLD IT DOWN TO WIND IT UP",
        boxStop: "THE MUSIC BOX STOPPED...",
        boxLow: "the winding is running out...",
        night: "NIGHT",
        loreTitle: "STORY & LORE",
        loreCap: "THE FLOOR PLAN. LEARN IT BY HEART. IT WILL KEEP YOU ALIVE.",
        loreP1: "It all began in a small family restaurant: Fredbear's Family Diner, and later Freddy Fazbear's Pizza, where the animatronics sang and served pizza to the kids. But something inside those suits learned to walk with nobody inside.",
        loreP2: "Five children went missing at a birthday party. A man in a purple suit took them to the back room and they never came out alive. The searches faded, the newapapers moved on... and the place kept reopening, as if nothing had happened.",
        loreP3: "An animatronic ripped the frontal lobe off an employee: that was the Bite of 87. The restaurants closed, the franchise crumbled. But that evil lingered in every abandoned suit, in every sealed crate, in every nightmare.",
        loreP4: "Night guards are the story of the ones who sit and endure: cameras, doors, power. If an animatronic catches you, there is no blood in the report: the office is simply empty, and nobody seems to remember you ever worked there.",
        sagaTitle: "THE SAGA",
        sagaIntro: "A series with more than a decade of scares. These are the eight main games, with their year, their cover and where to buy each one:",
        sagaNote: "The links open Steam, the official PC store where this saga has lived from the very beginnig.",
        creTitle: "THE CREATOR",
        creP1: "Behind it all is Scott Cawthon: an indie developer, father and family man, who had spent years publishing quiet little games. Once he was told his characters looked like creepy animatronics... and instead of taking offense, he took notes.",
        creP2: "And so, almost by accident, Five Nigths at Freddy's was born on August 8, 2014. Within weeks it was a worldwide phenomenon: sequels, novels, the movie and millions of fans. From ScottGames he led the saga until 2021, when he stepped back to be with his family, leaving the legacy to studios like Steel Wool and to a community that never stopped keeping watch.",
        grTitle: "SPECIAL THANKS",
        grCap: "MY DAY AT THE NEW FREDDY FAZBEAR'S PIZZERIA",
        grTxt: "Thanks you, Scott Cawthon. For Freddy, for Springtrap, for the music box and for 6 AM. For proving that a game made with love in a garege can scare the whole world... and charm it even more. None of these nights would exist without you.<br>Thanks you for a decade of impossible-to-forget nights.</br>",
        disclaim: "Unofficial fan page, not affiliated with ScottGames or Scott Cawthon. Made with terror and love.",
        jsHint: "TAP TO SCAPE",
        buyFrom: "BUY ON STEAM",
        words: ["HE ALWAYS COMES BACK", "DON'T BLINK", "IT'S WATCHING YOU", "THE CAMERAS LIE", "IT WAS INSIDE ALL ALONG", "DO NOT FALL ASLEEP", "HE IS HUNGRY", "6:00 AM NEVER COMES", "LOOK BEHIND YOU", "THE BOX WENT SILENT", "5 HOURS LEFT"]
    }
};

let lang = "es";
const $ = sel => document.querySelector(sel);

function paintSaga() {
    const d = I18N[lang];
    $("#saga-grid").innerHTML = GAMES.map(g => ` 
        <articule class="card">
        <img src="${g.image}" alt="${g.t}" loading="lazy" />
        <div class="card-body">
        <span class="card-year">${g.year}</span>
        <h3 class="card-t">${g.t}</h3>
        <p class="card-syn">${g.syn[lang]}</p>
        <a class="card-buy" href="${g.steam}" target="_blank" rel="noopener">${d.buyFrom}</a>

        </div>
    </articule>`).join("");
}

function applyLang() {
    const d = I18N[lang];
    document.documentElement.lang = lang;
    document.title = d.doc;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const k = el.getAttribute("data-i18n");
        if (d[k]) el.innerHTML = d[k];
    });
    $("#lang").textContent = lang === "es" ? "EN" : "ES";
    paintSaga();
    try { localStorage.setItem("fnaf-lang", lang); } catch (e) {}
}

try {const saved = localStorage.getItem("fnaf-lang"); if (saved === "en" || saved === "es") lang = saved; } catch (e) {}
applyLang(); });

let ambIdx = 0, ambNow = null, armed = false;
function playAmbClip(i) {
    const amb = document.createElement("audio");
    amb.src = AMBIENCE[i % AMBIENCE.length];
    amb.volume = AMB_VOL;
    amb.addEventListener("ended", () => { ambNow = null; playAmbClip(i + 1); });
    const p = amb.play();
    if (p && p.catch) p.catch(() => {});
    ambNow = amb;
}
function startAmbience() {
    armed = true;
    if (!ambNow) playAmbClip(ambIdx);
}
const armOnTouch = () => { startAmbience(); document.removeEventListener("pointerdown", armOnTouch); };
document.addEventListener("pointerdown", armOnTouch, { once: true});

let ac = null;
function mast() {
    if (!ac || ac.state === "closed") {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        ac = new AC();
    }
    if (ac.state === "suspended") ac.resume().catch(() => {});
    return ac;
}

function bell(freq, when, vol) {
    const c = mast(); if (!c || !freq) return;
    const t = when || c.currentTime;
    [[freq, vol || 0.16], [freq * 2, 0.05]].forEach(p => {
        const o = c.createOscillator(); o.type = "triangle"; o.frecuency.value = p[0];
        const g = c.createGain();
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(p[1], t + 0.012);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.95);
        o.connect(g); g.connect(c.destination); o.star(t); o.stop(t + 1);
    });
}

const NOTE = { ES: 659.25, Eb5: 622.25, B4: 493.88, D5: 587.33, C5: 523.25, A4: 440, C4: 261.63, E4: 329.63, Gs4: 415.3};
const MELODY = [
    NOTE.E5, NOTE.Eb5, NOTE.E5, NOTE.Eb5, NOTE.E5, NOTE.B4, NOTE.D5, NOTE.C5, NOTE.A4, 0, 
    NOTE.C4, NOTE.E4, NOTE.A4, NOTE.B4, 0, NOTE.E4, NOTE.Gs4, NOTE.B4, NOTE.C5, 0,
    NOTE.E4, NOTE.E5, NOTE.Eb5, NOTE.E5, NOTE.Eb5, NOTE.E5, NOTE.B4, NOTE.D5, NOTE.C5, NOTE.A4, 0
];

let melIdx = 0, melTimer = 0, melOn = false;
function melodyStep() {
    if (!melOn) return;
    const n = MELODY[melIdx];
    if (n) bell(n, 0, 0.15);
    melIdx = (melIdx + 1) % MELODY.length;
    melTimer = setTimeout(melodyStep, 400);
}
function melodyOn() { if (!melOn && armed) { melOn = true; melIdx = 0; melodyStep(); } }
function melodyOff() { melOn = false; clearTimeout(melTimer); }
function ratchetClick() { 
    const c = mast(); if (!c) return;
    const t = c.currentTime;
    const o = c.createOscillator(); o.type = "square"; o.frecuency.value = 1300;
    const g = c.createGain;
    g.gain.setValueAtTime(0.06, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
    o.connect(g); g.connect(c.destination); o.star(t); o.stop(t + 0.06);
}

const boxFill = $("#box.fill"), boxState = $("#box-state");
let wind = 1.0;
let holding = false;
let scareOpen = false;
let night = 0;
let deadTimer = 0;

function boxLoop() {
    setInterval(() => {
        if (holding && !scareOpen) {
            wind = Math.min(1, wind + 0.032);
            ratchetClick();
        } else if (!scareOpen) {
            wind = Math.max(0, wind - 0.010);
        }
        boxFill.style.width = Math.round(wind * 100) + "%";

        if (wind <= 0 && !scareOpen && !deadTimer) {
            melodyOff();
            boxState.textContent = I18N[lang].boxStop;
            boxState.classList.add("stop");
            deadTimer = setTimeout(() =>  {
                deadTimer = 0;
                launchJumpscare();
            }, 3000 + Math.random() * 4000);
        } else if (wind < 0.3 && !deadTimer) {
            boxState.textContent = I18N[lang].boxLow;
            boxState.classList.remove("stop");
        } else if (!deadTimer) {
            boxState.textContent = "";
            boxState.classList.remove("stop");

        }
        if (wind > 0 && !scareOpen) melodyOn();
    }, 200);
}

let windSnd = null;
const windBtn = $("#wind-btn");
const hold = ev => {
    ev.preventDefault();
    if (scareOpen) return;
    holding = true; startAmbience(); mast();
    if (!windSnd) {
        windSnd = document.createElement("audio");
        windSnd.src = WIND_AUD; windSnd.loop = true; windSnd.volume = 0.5;
        document.body.appendChild(windSnd);
    }
    const p = windSnd.play(); if (p && p.catch) p.catch(() => {});
};
const drop = () => {
    holding = false;
    if (windSnd) { try { windSnd.pause(); } catch (e) {} }
};
windBtn.addEventListener("pointerdown", hold);
["pointerup", "pointerleave", "pointercancel"].forEach(e => windBtn.addEventListener(e,  drop));
window.addEventListener("blur", drop);

function launchJumpscare() {
    if (scareOpen || !armed) return;
    scareOpen = true;
    night++;
    $("#night-n").textContent = night;

    melodyOff();
    if (windSnd) { try { windSnd.pause(); } catch (e) {} }

    const s = SCARES[(Math.random() * SCARES.length) | 0];
     const layer = document.createElement("div");
     layer.className = "js-final";
     layer.innerHTML = 
     `<video class="js-vid" src="${s.v}" loop playsinline preload="auto" muted></video>` +
     `<div class="js-hint">${I18N[lang].jsHint}</div>`;
     document.body.appendChild(layer);
     try { if (navigator.vibrate) navigator.vibrate([320, 90, 480]); } catch (e) {}

     if (ambNow) ambNow.volume = AMB_DUCK;

     const vid = layer.querySelector("video");
     const snd = new Audio(s.a);
     snd.preload = "auto";
     snd.volume = 1;
     snd.dataset.scare = "1";
     document.body,appendChild(snd);

     const hit = () => {
        try { snd.currentTime = 0.001; snd.play().catch(() => {}); } catch (e) {}
        try { vid.currentTime = 0; vid.play().catch(() => {}); } catch (e) {}
     };
     hit();
     vid.addEventListener("canplay", () => { try { if (vid.paused) vid.play().catch(() => {}); } catch (e) {} }, { once: true });

     const end = () => {
        if (!layer.isConnected) return;
        try { vid.pause(); } catch (e) {}
        try { snd.pause(); } catch (e) {}
        try { if (snd.parentNode) snd.remove(); } catch (e) {}
        layer.remove();
        scareOpen = false;
        if (ambNow) ambNow.volume = AMB_VOL;
        wind = 0.45;
        boxState.textContent = "";
        boxState.classList.remove("stop");
        summonWisp(true);
     };
     layer.addEventListener("click", end);
     snd.addEventListener("ended", end, { once: true});
     setTimeout(end, 7000);
}

function randomScare() {
    setTimeout(() => {
        if (armed && !scareOpen && Math.random() < 0.45) launchJumpscare();
        randomScare();
    }, 45000 + Math.random() * 60000);
}
randomScare();

function buyAUDIO() {
    const el = document.createElement("audio");
    el.src = BUY_AUD; el.volume = 0.7;
    document.body.appendChild(el);
    const p = el.play(); if (p && p.catch) p.catch(() => {});
setTimeout(() => { el.pause(); el.remove(); }, 8000); 
}
$("#saga-grid").addEventListener("click", (ev) => {
    if (!ev.target.closest(".card-buy")) return;
    buyAudio();
    aparte
});

function summonWisp(force) {
    if (document.querySelector(".js-final")) return;
    const words = I18N[lang].words;
    const el = document.createElement("div");
    el.className = "wisp";
    el.textContent = words[(Math.random() * words.length) | 0];
    const vw = window.innerWidth, vh = window.innerHeight;
    el.style.left = (40 + Math.random() * (vw - 260)) + "px";
    el.style.top = (60 + Math.random() * (vh - 220)) + "px";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 5200);
}
function wispLoop() {
    setTimeout(() => { summonWisp(); wispLoop(); }, 4200 + Math.random() * 5200);
}
wispLoop();
boxLoop();

window.__fnaf = { susto: launchJumpscare, comprar: buyAudio, estadoBox: () => ({ wind:
    Math.round(wind * 100) + "%", holding, scareOpen }) };

