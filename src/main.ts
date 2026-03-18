import './style.scss';
import { registerSW } from 'virtual:pwa-register';
import { auth, subscribeToEvents, addEvent, deleteEvent, deleteMultipleEvents } from './firebase';
import { initSynthBackground } from './synth-background';

initSynthBackground();

const updateSW = registerSW({
    immediate: true,
    onNeedRefresh() {
        showToast("New version available! Refreshing...", 'info');
        setTimeout(() => {
            updateSW(true);
        }, 1500);
    },
    onOfflineReady() {
        showToast("App ready to work offline!", 'info');
    }
});

// Check for updates every hour
setInterval(() => {
    updateSW(true);
}, 60 * 60 * 1000);

import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { generateMonthView, isOverlap } from './calendar';
import { Event } from './types';
import { Chalkboard } from './chalkboard';

const appDiv = document.querySelector<HTMLDivElement>('#app')!;
const toastContainer = document.createElement('div');
toastContainer.className = 'toast-container';
document.body.appendChild(toastContainer);

function hideSplashScreen() {
    const splash = document.getElementById('splash-screen');
    if (splash) {
        splash.classList.add('fade-out');
        setTimeout(() => splash.remove(), 1000);
    }
}

// State
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let allEvents: Event[] = [];

interface Ad {
    text: string;
    image: string;
}

const ads: Ad[] = [
    { text: "HYR EN IGELKOTT SOM SÄLLSKAP - 20 KR/DAG", image: "https://images.unsplash.com/photo-1584447128309-b66b7a4d1b63?auto=format&fit=crop&q=80&w=800" },
    { text: "BLI CERTIFIERAD MOLNSKÅDARE - ANMÄL DIG NU", image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&q=80&w=800" },
    { text: "GÖR DIN EGEN OST I BADKARET: STARTKIT", image: "https://images.unsplash.com/photo-1486297678162-ad2a19b05840?auto=format&fit=crop&q=80&w=800" },
    { text: "KURSER I ATT STIRRA PÅ GETTER", image: "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&q=80&w=800" },
    { text: "ABONNEMANG PÅ SLUMPMÄSSIGA STENAR", image: "https://images.unsplash.com/photo-1525857597365-5f6dbff2e36e?auto=format&fit=crop&q=80&w=800" },
    { text: "VATTENTÄTA TEPÅSAR - BRYGG UNDER VATTEN!", image: "https://images.unsplash.com/photo-1544787210-2211d7c309c7?auto=format&fit=crop&q=80&w=800" },
    { text: "LÄR DIN GULDFISK ATT SJUNGA OPERA", image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=800" },
    { text: "SÄLJ DIN SKUGGA TILL HÖGSTBJUDANDE", image: "https://images.unsplash.com/photo-1508020482468-fd295744b9ca?auto=format&fit=crop&q=80&w=800" },
    { text: "EXTRA LÅNG SPAGHETTI FÖR ENSAMMA KVÄLLAR", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800" },
    { text: "HAR DU SETT EN UFO? RAPPORTERA HÄR!", image: "https://images.unsplash.com/photo-1506466010722-395ee2bef877?auto=format&fit=crop&q=80&w=800" },
    { text: "PLÖJ SOM ETT PROFFS MED TRAKTOR-KRAFT", image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800" },
    { text: "SPÅDOM I FISKINNÄLVOR - BOKA TID", image: "https://images.unsplash.com/photo-1469122312224-c5846569efe1?auto=format&fit=crop&q=80&w=800" },
    { text: "TALA MED DINA VÄXTER - NY KURS STARTAR NU", image: "https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?auto=format&fit=crop&q=80&w=800" },
    { text: "ÄR DIN KATT EN RYMDVARELSE? TESTA HÄR", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800" },
    { text: "JÄTTE-TRAKTOR TILL SALU: FÖRST TILL KVARN", image: "https://images.unsplash.com/photo-1594411130638-349f7e346f9f?auto=format&fit=crop&q=80&w=800" },
    { text: "HYR EN PERSON SOM NICKAR IMPONERAT ÅT ALLT DU SÄGER", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
    { text: "VI LÄSER DIN FRAMTID I EN ÖVERKOKT SPAGHETTI", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800" },
    { text: "KÖP EN HALV OSYNLIG STOL – SITT OM DU VÅGAR", image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800" },
    { text: "DIN GRANNE ÄR TROLIGEN EN ÖDLA – TESTA HÄR", image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&q=80&w=800" },
    { text: "KURS: SKRIK PÅ MOLN FÖR PERSONLIG UTVECKLING", image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&q=80&w=800" },
    { text: "VI TRÄNAR DIN KAKTUS ATT SKYDDA DITT HEM", image: "https://images.unsplash.com/photo-1509423350716-97f2360af2e4?auto=format&fit=crop&q=80&w=800" },
    { text: "FÅ DIN SKUGGA ATT ARBETA ÖVERTID", image: "https://images.unsplash.com/photo-1508020482468-fd295744b9ca?auto=format&fit=crop&q=80&w=800" },
    { text: "SÄLJ DIN SJÄL FÖR EN KUPONG PÅ FALAFEL", image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&q=80&w=800" },
    { text: "EXTRA LÅNG BANAN FÖR FILOSOFISKA DISKUSSIONER", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=800" },
    { text: "HYR EN MÅS SOM SKRIKER DITT NAMN I GRYNINGEN", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" },
    { text: "KÖP EN DÖRR SOM LEDER TILL EN ANNAN DÖRR", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=800" },
    { text: "STARTKIT FÖR ATT BLI LOKAL LEGENd I EN PARK", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=800" },
    { text: "VI ÖVERSÄTTER DIN HUNDS EXISTENTIELLA KRIS", image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&q=80&w=800" },
    { text: "MYSTISK KNAPP – TRYCK INTE PÅ DEN", image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&q=80&w=800" },
    { text: "BLI JAGAD AV EN PERSON I KYCKLINGDRÄKT (MOTIVATION)", image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=800" },
    { text: "KURS I ATT MISSTOLKA VANLIGA SAKER", image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800" },
    { text: "PRENUMERERA PÅ VECKANS KONSTIGA POTATIS", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=800" },
    { text: "DIN BRÖDROST VISKAR OM NATTEN – VI FÖRKLARAR VARFÖR", image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=800" },
    { text: "TEST: ÄR DU EGENTLIGEN TRE IGELKOTTAR I EN ROCK?", image: "https://images.unsplash.com/photo-1584447128309-b66b7a4d1b63?auto=format&fit=crop&q=80&w=800" },
    { text: "KÖP EN STEN SOM KÄNNER DINA HEMLIGHETER", image: "https://images.unsplash.com/photo-1525857597365-5f6dbff2e36e?auto=format&fit=crop&q=80&w=800" },
    { text: "VI LÄR DIN BRÖDROST ATT SPELA SCHACK", image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=800" },
    { text: "TEST: ÄR DIN SOFFA EGENTLIGEN EN AGENT?", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800" },
    { text: "FÅ EN DAGLIG FÖROLÄMPNING FRÅN EN PAPPEGOJA", image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&q=80&w=800" },
    { text: "PRENUMERERA PÅ MYSTISKA LJUD FRÅN DIN GARDEROB", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800" },
    { text: "KÖP EN BANAN SOM DÖMER DIG", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=800" },
    { text: "DIN MIKROVÅGSUGN HAR ÅSIKTER – HÖR DEM HÄR", image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&q=80&w=800" },
    { text: "KURS: ATT GÅ FÖRBI NÅGON UTAN ATT VETA ÅT VILKET HÅLL", image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800" },
    { text: "FÅ EN PERSON SOM VISKAR 'WOW' VARJE GÅNG DU JOBBAR", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
    { text: "VI UTVÄRDERAR DIN POTATIS PERSONLIGHET", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=800" },
    { text: "KÖP EN KNAPP SOM STARTAR DRAMATISK MUSIK", image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&q=80&w=800" },
    { text: "DIN KATT PLANERAR NÅGOT – LÄS RAPPORTEN", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800" },
    { text: "HYR EN VIKING SOM NICKAR GODKÄNNANDE", image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&q=80&w=800" },
    { text: "TEST: ÄR DU TRE MÖSS I EN ROCK?", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&q=80&w=800" },
    { text: "KÖP EN DÖRR SOM IBLAND APPLÅDERAR", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=800" },
    { text: "KURS I ATT TÄVLA MOT DUvor I ATT GÅ", image: "https://images.unsplash.com/photo-1501706362039-c6e80948bb8b?auto=format&fit=crop&q=80&w=800" },
    { text: "VI SKICKAR EN PERSON SOM SÄGER 'DET VAR JAG SOM SA DET'", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=800" },
    { text: "LÅT EN MUNK FÖRKLARA DINA TOASTERSYNDER", image: "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&q=80&w=800" },
    { text: "DIN SKO HAR HEMLIGHETER – VI PRESSAR DEN", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800" },
    { text: "ABONNERA PÅ EN DAGLIG FÖRVIRRANDE FAKTA OM GURKOR", image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&q=80&w=800" },
    { text: "HYR EN PERSON SOM GÅR BAKLÄNGES FRAMFÖR DIG (AURA BOOST)", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
    { text: "KÖP EN OSYNLIG CYKEL – KÄNN FRIHETEN", image: "https://images.unsplash.com/photo-1508973378894-64d9e6fcb6b6?auto=format&fit=crop&q=80&w=800" },
    { text: "VI LÄR DIN VÄCKARKLOCKA ATT VARA PASSIV-AGGRESSIV", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800" },
    { text: "KURS: ATT NICHA DIG SOM 'DEN SOM ALLTID HAR EN SKED'", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800" },
    { text: "ABONNEMANG PÅ LÄTT BESVIKELSE – LEVERANS VARJE MÅNDAG", image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800" },
    { text: "KÖP EN LUFTBIT FRÅN 1997 – LIMITED EDITION", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=800" },
    { text: "VI LÅTSAS VARA IMPONERADE AV DIN PLANTERING", image: "https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?auto=format&fit=crop&q=80&w=800" },
    { text: "FÅ DIN SKRIVARE ATT RESPEKTERA DIG", image: "https://images.unsplash.com/photo-1581091215367-59ab6b5d9b5b?auto=format&fit=crop&q=80&w=800" },
    { text: "TEST: ÄR DU EN LÅDA MED OKLARA AMBITIONER?", image: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?auto=format&fit=crop&q=80&w=800" },
    { text: "VI SÄLJER EN PINNE MED HÖG SJÄLVKÄNSLA", image: "https://images.unsplash.com/photo-1501706362039-c6e80948bb8b?auto=format&fit=crop&q=80&w=800" },
    { text: "HYR EN PERSON SOM SÄGER 'INTRESSANT…' VID FEL TILLFÄLLE", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=800" },
    { text: "KÖP EN HATT SOM VISKAR DINA DÅLIGA IDÉER HÖGRE", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800" },
    { text: "VI TRÄNAR DIN VATTENFLASKA ATT VARA DÖMANDE", image: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&q=80&w=800" },
    { text: "KURS I ATT STÅ OCH VÄNTA UTAN SYFTE", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&q=80&w=800" },
    { text: "KÖP EN LÅDA SOM IBLAND ANDAS", image: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?auto=format&fit=crop&q=80&w=800" },
    { text: "FÅ EN DAGLIG RAPPORT OM INGENTING", image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800" },
    { text: "VI SÄLJER ETT STEG SOM ALDRIG TAR SLUT", image: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2b8d?auto=format&fit=crop&q=80&w=800" },
    { text: "TEST: ÄR DIN SKUGGA TRÖTT PÅ DIG?", image: "https://images.unsplash.com/photo-1508020482468-fd295744b9ca?auto=format&fit=crop&q=80&w=800" },
    { text: "KÖP EN TOM BURK MED STARKA ÅSIKTER", image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=800" },
    { text: "VI SKICKAR EN PERSON SOM AVBRYTER DIG MED 'SIDOSPÅR!'", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=800" },
    { text: "ABONNERA PÅ VECKANS OBEKVÄMA TYSTNAD", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=800" },
    { text: "KÖP EN SPEGEL SOM INTE HÅLLER MED DIG", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800" },
    { text: "KURS: ATT GÅ IN I ETT RUM OCH GLÖMMA VARFÖR", image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800" },
    { text: "VI OPTIMERAR DIN DRAMATISKA SUCK", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
    { text: "KÖP EN STOL SOM KÄNNER SIG ÖVERKVALIFICERAD", image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=800" },
    { text: "HYR EN PERSON SOM NICKAR FELAKTIGT", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=800" },
    { text: "VI LÄR DIN VÄSKA ATT HÅLLA HEMLIGHETER FÖR BRA", image: "https://images.unsplash.com/photo-1526178612295-3b4b2b2b5a77?auto=format&fit=crop&q=80&w=800" },
    { text: "TEST: ÄR DU EGENTLIGEN EN MÅTTBAND?", image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&q=80&w=800" },
    { text: "KÖP EN KNAPP SOM INTE GÖR NÅGOT MEN KÄNNS VIKTIG", image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&q=80&w=800" },
    { text: "FÅ EN PERSON SOM VISKAR 'DET HÄR ÄR LORE' I DITT ÖRA", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" }
];

function updateAds() {
    const adSpaces = document.querySelectorAll('.ad-space');
    const styles = [
        "style-tabloid",
        "style-neon",
        "style-vintage",
        "style-urgent",
        "style-comic",
        "style-glitch",
        "style-luxury",
        "style-retro90",
        "style-terminal",
        "style-sticker",
        "style-horror",
        "style-minimal",
        "style-vaporwave",
        "style-brutal",
        "style-glass",
        "style-cybergrid",
        "style-newspaper",
        "style-kids",
        "style-hud",
        "style-paper",
        "style-liquid",
        "style-warning"
    ];

    adSpaces.forEach(spaceEl => {
        const tryLoadAd = () => {
            const space = spaceEl as HTMLElement;

            const ad = ads[Math.floor(Math.random() * ads.length)];
            const style = styles[Math.floor(Math.random() * styles.length)];

            const animations = ["zoom", "shake", "drift", "pulse"];
            const anim = animations[Math.floor(Math.random() * animations.length)];

            space.dataset.anim = anim;

            const img = new Image();
            img.src = ad.image;

            img.onload = () => {
                styles.forEach(s => space.classList.remove(s));
                space.classList.add(style);

                space.innerHTML = `
                    <div class="ad-bg-anim" style="background-image: url('${ad.image}')"></div>
                    <div class="ad-overlay"></div>
                    <div class="ad-content">${ad.text}</div>
                `;
            };

            img.onerror = () => {
                tryLoadAd();
            };
        };

        tryLoadAd();
    });
}

setInterval(updateAds, 10000);

function showToast(message: string, type: 'info' | 'error' = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

function renderAuth() {
    appDiv.classList.add('auth-mode');
    appDiv.innerHTML = `
        <div class="top-bar">
            <h1>Tegel</h1>
            <a href="https://games.tegelhus.uk" class="games-link" target="_blank">Games</a>
        </div>
        <div class="auth-form">
            <input type="email" id="email" placeholder="Email" />
            <input type="password" id="password" placeholder="Password" />
            <button id="login-btn">Login</button>
        </div>
    `;
    updateAds();

    document.querySelectorAll('.ad-space').forEach(ad => {
        ad.addEventListener('click', (e: any) => {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ad.appendChild(ripple);
            const x = e.clientX - ad.getBoundingClientRect().left;
            const y = e.clientY - ad.getBoundingClientRect().top;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            setTimeout(() => ripple.remove(), 600);
        });
    });

    const handleLogin = async () => {
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            showToast("Logged in successfully!");
        } catch (e: any) {
            showToast(e.message, 'error');
        }
    };

    document.getElementById('login-btn')?.addEventListener('click', handleLogin);

    document.getElementById('password')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
    });
    document.getElementById('email')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
    });
}

export function showConfirmModal(message: string, onConfirm: () => void) {
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Are you sure?</h2>
            <p style="text-align: center; color: #9d00ff; margin-bottom: 20px;">${message}</p>
            <div class="modal-actions">
                <button id="confirm-yes">Yes, Delete</button>
                <button id="confirm-no" class="cancel-btn">No, Keep it</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    };

    document.getElementById('confirm-no')?.addEventListener('click', closeModal);

    document.getElementById('confirm-yes')?.addEventListener('click', () => {
        onConfirm();
        closeModal();
    });
}

function showBookingModal(dateStr: string, events: Event[]) {
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    const user = auth.currentUser;
    const defaultTitle = user?.email || '';

    modal.innerHTML = `
        <div class="modal-content">
            <h2>Book Event</h2>
            <p style="text-align: center; color: #9d00ff;">Date: ${dateStr}</p>
            <div class="form-group">
                <label>Title</label>
                <input type="text" id="event-title" placeholder="Synth Party" value="${defaultTitle}" />
            </div>
            <div class="form-group">
                <label>Start Time</label>
                <input type="time" id="event-start" value="12:00" />
            </div>
            <div class="form-group">
                <label>End Time</label>
                <input type="time" id="event-end" value="13:00" />
            </div>
            <div class="modal-actions">
                <button id="confirm-booking">Confirm</button>
                <button id="cancel-booking" class="cancel-btn">Cancel</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('cancel-booking')?.addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    });

    const handleBooking = async () => {
        const title = (document.getElementById('event-title') as HTMLInputElement).value;
        const startTimeStr = (document.getElementById('event-start') as HTMLInputElement).value;
        const endTimeStr = (document.getElementById('event-end') as HTMLInputElement).value;

        if (!title) {
            showToast("Please enter a title", 'error');
            return;
        }

        const startTimestamp = new Date(`${dateStr}T${startTimeStr}`).getTime();
        const endTimestamp = new Date(`${dateStr}T${endTimeStr}`).getTime();

        if (endTimestamp <= startTimestamp) {
            showToast("End time must be after start time", 'error');
            return;
        }

        if (isOverlap({ start: startTimestamp, end: endTimestamp }, events)) {
            showToast("This time slot is already booked!", 'error');
            return;
        }

        const user = auth.currentUser;
        if (user) {
            try {
                await addEvent({
                    userId: user.uid,
                    title,
                    start: startTimestamp,
                    end: endTimestamp,
                    email: user.email || '',
                    color: '#' + Math.floor(Math.random() * 16777215).toString(16)
                });
                showToast("Event booked!");
                modal.classList.remove('active');
                setTimeout(() => modal.remove(), 300);
            } catch (e: any) {
                showToast(e.message, 'error');
            }
        }
    };

    document.getElementById('confirm-booking')?.addEventListener('click', handleBooking);

    ['event-title', 'event-start', 'event-end'].forEach(id => {
        document.getElementById(id)?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleBooking();
        });
    });
}

function showMyBookingsModal(events: Event[]) {
    const now = Date.now();
    const userEvents = events.filter(e => e.email === auth.currentUser?.email);
    const upcomingEvents = userEvents.filter(e => e.end >= now).sort((a, b) => a.start - b.start);
    const pastEvents = userEvents.filter(e => e.end < now).sort((a, b) => b.start - a.start);

    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) existingModal.remove();

    const renderEventItem = (ev: Event) => {
        const dateStr = new Date(ev.start).toLocaleDateString();
        const startStr = new Date(ev.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const endStr = new Date(ev.end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return `
            <div class="my-booking-item" style="border-left-color: ${ev.color}">
                <div class="my-booking-info">
                    <div class="my-booking-title">${ev.title}</div>
                    <div class="my-booking-time">${dateStr} | ${startStr} - ${endStr}</div>
                </div>
                <button class="delete-my-booking" data-id="${ev.id}">&times;</button>
            </div>
        `;
    };

    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.innerHTML = `
        <div class="modal-content" style="max-height: 85vh; display: flex; flex-direction: column;">
            <h2>My Bookings</h2>
            <div class="my-bookings-list" style="overflow-y: auto; flex: 1; padding-right: 5px;">
                ${userEvents.length === 0 ? '<p style="text-align: center; color: #ff00ff;">No bookings found.</p>' : ''}
                
                ${upcomingEvents.length > 0 ? `
                    <div class="booking-section">
                        <h3 class="section-title upcoming">Upcoming</h3>
                        ${upcomingEvents.map(renderEventItem).join('')}
                    </div>
                ` : ''}

                ${pastEvents.length > 0 ? `
                    <div class="booking-section">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                            <h3 class="section-title past">Past</h3>
                            <button id="delete-all-past" class="tiny-btn-neon">Delete All Past</button>
                        </div>
                        ${pastEvents.map(renderEventItem).join('')}
                    </div>
                ` : ''}
            </div>
            <div class="modal-actions">
                <button id="close-my-bookings">Close</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('delete-all-past')?.addEventListener('click', () => {
        const pastIds = pastEvents.map(e => e.id).filter((id): id is string => !!id);
        if (pastIds.length > 0) {
            showConfirmModal(`Delete all ${pastIds.length} past bookings?`, async () => {
                try {
                    await deleteMultipleEvents(pastIds);
                    showToast("Past bookings cleared");
                    modal.remove();
                } catch (err: any) {
                    showToast(err.message, 'error');
                }
            });
        }
    });

    document.getElementById('close-my-bookings')?.addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    });

    document.querySelectorAll('.delete-my-booking').forEach(btn => {
        btn.addEventListener('click', async () => {
            const eventId = btn.getAttribute('data-id');
            if (eventId) {
                showConfirmModal("Delete this booking?", async () => {
                    try {
                        await deleteEvent(eventId);
                        showToast("Booking deleted");
                        modal.remove(); // Close modal to refresh
                    } catch (err: any) {
                        showToast(err.message, 'error');
                    }
                });
            }
        });
    });
}

function renderCalendar() {
    appDiv.classList.remove('auth-mode');
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthView = generateMonthView(currentYear, currentMonth, allEvents);

    const todayObj = new Date();
    const isCurrentMonth = currentYear === todayObj.getFullYear() && currentMonth === todayObj.getMonth();
    const todayStr = `${todayObj.getFullYear()}-${String(todayObj.getMonth() + 1).padStart(2, '0')}-${String(todayObj.getDate()).padStart(2, '0')}`;

    appDiv.innerHTML = `
        <div class="top-bar">
            <h1>Tegel</h1>
            <div class="actions-bar">
                <a href="https://games.tegelhus.uk" class="games-link" target="_blank">Games</a>
                <button id="chalkboard-btn" class="small-btn-neon pink">Anslagstavla</button>
                ${!isCurrentMonth ? `<button id="go-today-btn" class="small-btn-neon purple">Current Month</button>` : ''}
                <button id="my-bookings-btn" class="small-btn-neon">My Bookings</button>
                <button id="logout-btn" class="small-btn-neon" style="color: #fff; border-color: #fff; box-shadow: 0 0 5px #fff;">Logout</button>
            </div>
        </div>
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
            <button id="prev-month">&lt;</button>
            <h2 style="color: #00ffff; text-shadow: 0 0 5px #00ffff; margin: 0; text-transform: uppercase; font-size: 1.2rem;">
                ${monthNames[currentMonth]} ${currentYear}
            </h2>
            <button id="next-month">&gt;</button>
        </div>

        <div class="calendar-grid">
            ${monthView.days.map(day => `
                <div class="day-cell ${day.date === todayStr ? 'today' : ''}" data-date="${day.date}">
                    <div class="day-number">${day.dayOfMonth}</div>
                    <div class="event-list">
                        ${day.events.map(ev => {
        const isMine = ev.email === auth.currentUser?.email;
        const startStr = new Date(ev.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const endStr = new Date(ev.end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return `
                                <div class="event ${isMine ? 'my-event' : ''}" 
                                     style="border-color: ${ev.color || '#ff00ff'}" 
                                     title="${startStr} - ${endStr}: ${ev.title}" 
                                     data-id="${ev.id}">
                                    <span class="event-time">${startStr}-${endStr}</span>
                                    <span class="event-title">${ev.title}${isMine ? ' (Me)' : ''}</span>
                                    ${isMine ? `<span class="delete-ev-btn" title="Delete">&times;</span>` : ''}
                                </div>
                            `;
    }).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    updateAds();

    document.querySelectorAll('.ad-space').forEach(ad => {
        ad.addEventListener('click', (e: any) => {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ad.appendChild(ripple);
            const x = e.clientX - ad.getBoundingClientRect().left;
            const y = e.clientY - ad.getBoundingClientRect().top;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            setTimeout(() => ripple.remove(), 600);
        });
    });

    document.getElementById('logout-btn')?.addEventListener('click', () => {
        signOut(auth);
        showToast("Logged out");
    });

    document.getElementById('chalkboard-btn')?.addEventListener('click', () => {
        new Chalkboard(appDiv);
        document.getElementById('back-to-calendar')?.addEventListener('click', () => {
            renderCalendar();
        });
    });

    document.getElementById('my-bookings-btn')?.addEventListener('click', () => {
        showMyBookingsModal(allEvents);
    });

    document.getElementById('go-today-btn')?.addEventListener('click', () => {
        const now = new Date();
        currentYear = now.getFullYear();
        currentMonth = now.getMonth();
        renderCalendar();
    });

    document.getElementById('prev-month')?.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
    });

    document.getElementById('next-month')?.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
    });

    document.querySelectorAll('.delete-ev-btn').forEach(btn => {
        btn.addEventListener('click', async (e: any) => {
            e.stopPropagation();
            const eventDiv = btn.closest('.event') as HTMLDivElement;
            const eventId = eventDiv.getAttribute('data-id');
            const eventTitle = eventDiv.querySelector('.event-title')?.textContent?.replace(' (Me)', '');

            if (eventId) {
                showConfirmModal(`Delete event "${eventTitle}"?`, async () => {
                    try {
                        await deleteEvent(eventId);
                        showToast("Event deleted");
                    } catch (err: any) {
                        showToast(err.message, 'error');
                    }
                });
            }
        });
    });

    document.querySelectorAll('.day-cell').forEach(cell => {
        cell.addEventListener('click', (e: any) => {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            cell.appendChild(ripple);
            const x = e.clientX - cell.getBoundingClientRect().left;
            const y = e.clientY - cell.getBoundingClientRect().top;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            setTimeout(() => ripple.remove(), 600);

            const date = cell.getAttribute('data-date');
            if (date) {
                showBookingModal(date, allEvents);
            }
        });
    });

    const today = new Date();
    if (currentYear === today.getFullYear() && currentMonth === today.getMonth()) {
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const todayStr = `${yyyy}-${mm}-${dd}`;

        const todayCell = document.querySelector(`.day-cell[data-date="${todayStr}"]`);
        if (todayCell) {
            setTimeout(() => {
                todayCell.scrollIntoView({ behavior: 'smooth', block: 'center' });
                (todayCell as HTMLElement).style.boxShadow = `0 0 20px #00ffff`;
                setTimeout(() => {
                    (todayCell as HTMLElement).style.boxShadow = '';
                }, 2000);
            }, 100);
        }
    }
}

let initialLoad = true;
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.querySelector('.modal-overlay.active');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    }
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        subscribeToEvents((events) => {
            allEvents = events;
            renderCalendar();
            if (initialLoad) {
                hideSplashScreen();
                initialLoad = false;
            }
        });
    } else {
        renderAuth();
        if (initialLoad) {
            hideSplashScreen();
            initialLoad = false;
        }
    }
});
