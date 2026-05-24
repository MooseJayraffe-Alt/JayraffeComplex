// global.js - The central brain
const SUPABASE_URL = 'https://edmakmpjcudrwdxpgbuc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkbWFrbXBqY3VkcndkeHBnYnVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NTAzNDMsImV4cCI6MjA4ODUyNjM0M30.efTUVrvQbKYBlDBv2B-SCXaKQYCRU84gJ9jP8CMwyUs';
window.activityLibrary = {
        "hl1": {
            title: "Half-Life",
            creator: "Valve Software",
            tags: "FPS / GoldSrc",
            desc: "Run, think, shoot.. live. Experience the original 1998 masterpiece directly in your browser.",
            banner: "assets/images/HL1Thumbnail.jpg",
            engine: "xash3d",
            screenshots: ["assets/images/HL1Thumbnail.jpg"],
            config: { url: "https://x8bitrain.github.io/webXash/" }
        },
        "deltarune": {
            title: "Deltarune",
            creator: "Toby Fox",
            tags: "Adventure/2D/Indie",
            desc: "yes i somehow got the ENTIRE activity of deltarune on here 💔",
            banner: "assets/images/DeltaruneThumbnail.webp",
            engine: "HTML5",
            screenshots: ["assets/images/DeltaruneThumbnail.webp"],
            config: { url: "https://jimmyqrg.github.io/loader/?content=https%3A%2F%2Fjimmyqrg.github.io%2Fjqrg-activitys%2Factivitys%2Fdeltarune%2F" }
        },
        "donuteria": {
            title: "Papa's Donuteria",
            creator: "Flipline Studios",
            tags: "2D/Cooking",
            desc: "homer drops his donuts, d'oh!",
            banner: "assets/images/PapasDonuteria.jpg",
            engine: "Flash",
            screenshots: ["assets/images/PapasDonuteria.jpg"],
            config: { filename: "papasdonuteria" }
        },
        "hw": {
            title: "Happy Wheels",
            creator: "PLACEHOLDER",
            tags: "2D/Side-Scroller",
            desc: "this brings back memories lol",
            banner: "assets/images/Placeholder.png",
            engine: "Flash",
            screenshots: ["assets/images/Placeholder.png"],
            config: { filename: "HappyWheels" }
        },
        "iq": {
            title: "The Impossible Quiz",
            creator: "PLACEHOLDER",
            tags: "Flash/Difficult",
            desc: "IQ",
            banner: "assets/images/Placeholder.png",
            engine: "Flash",
            screenshots: ["assets/images/Placeholder.png"],
            config: { filename: "IQ" }
        },
        "bendy": {
            title: "Bendy and the Ink Machine",
            creator: "TheMeatly",
            tags: "Horror / Indie",
            desc: "bendy was a little devil thing (Hey, I am alive! Immortalized, You're the creator! You traitor!)",
            banner: "assets/images/BendyThumbnail.jpg",
            engine: "HTML5",
            screenshots: ["assets/images/BendyThumbnail.jpg"],
            config: { url: "https://moosejayraffe-alt.github.io/bendy-and-the-ink-machine/" }
        },

        "cuphead": {
            title: "Cuphead",
            creator: "Studio MDHR",
            tags: "2D Side-Scroller / Action",
            desc: "hey can someone play as mughead (no-one except me would get this reference)",
            banner: "assets/images/CupheadThumbnail.avif",
            engine: "HTML5",
            screenshots: ["assets/images/CupheadThumbnail.avif"],
            config: { url: "https://moosejayraffe-alt.github.io/cuphead/" }
        }, //

        "pizzatower": {
            title: "Pizza Tower",
            creator: "Studio MDHR",
            tags: "2D Side-Scroller / Action",
            desc: "pizza guy from pizza time",
            banner: "assets/images/PT.jpg",
            engine: "HTML5",
            screenshots: ["assets/images/PT.jpg"],
            config: { url: "https://www.autistici.org/burnedprojects/NoiseUpdate/" }
        },

        "doom": {
            title: "Doom",
            creator: "ID Software",
            tags: "Horror / Action / Shooter",
            desc: "Can Jayraffe Complex run Doom? Try and find out. ",
            banner: "assets/images/DoomThumbnail.webp",
            engine: "JS-DOS",
            screenshots: ["assets/images/DoomThumbnail.webp"],
            config: { url: "https://v8.js-dos.com/bundles/doom.jsdos" }
        },
        "danganronpa": {
            title: "Danganronpa: Trigger Happy Havoc",
            creator: "Spike Chunsoft",
            tags: "Horror / Mystery",
            desc: "junko is so peak and btw i could fix her trust me guys 💔",
            banner: "assets/images/DanganronpaThumbnail.webp",
            engine: "HTML5",
            screenshots: ["assets/images/DanganronpaThumbnail.webp"],
            config: { url: "https://selenite.cc/resources/semag/danganronpa/g.html" }
        },
        "fnf": {
            title: "Friday Night Funkin",
            creator: "Ninjamuffin99 and the Funkin Crew",
            tags: "Rhythm / Action",
            desc: "getting ###### on a friday night, my name is coryxkenshin aka the samurai",
            banner: "assets/images/FridayNightFunkinThumbnail.jpg",
            engine: "HTML5",
            screenshots: ["assets/images/FridayNightFunkinThumbnail.jpg"],
            config: { url: "https://moosejayraffe-alt.github.io/JCXEngine/" }
        },
        "indiecross": {
            title: "Friday Night Funkin: Indie Cross",
            creator: "The Funkin' Crew and the Indie Cross team.",
            tags: "Rhythm / Action",
            desc: "don't get parried or skipped and swayed or dunked on in this epic battle.",
            banner: "assets/images/FridayNightFunkinThumbnail.jpg",
            engine: "HTML5",
            screenshots: ["assets/images/FridayNightFunkinThumbnail.jpg"],
            config: { url: "https://fnf.kdata1.com/2026/indie-cross/3/" }
        },
        "twiddlefingers": {
            title: "Friday Night Funkin: TWIDDLEFINGERS!",
            creator: "Ninjamuffin99 and the Funkin Crew and maxprolover988",
            tags: "Rhythm / Action",
            desc: "After all, of the wasted years! Need a little bit of your fear, a little bit of your blood! Then we can finally be oneeee!",
            banner: "assets/images/TwiddlefingersThumbnail.jpg",
            engine: "HTML5",
            screenshots: ["assets/images/TwiddlefingersThumbnail.jpg"],
            config: { url: "https://fnf.kdata1.com/2024/twiddlefinger-fanmade/5/" }
        }, //
        "irida": {
            title: "Friday Night Funkin: SHUCKS!",
            creator: "Ninjamuffin99 and the Funkin Crew as well as the Shucks V2 team.",
            tags: "Rhythm / Action",
            desc: "SO I'LL WATCH AS YOU BLEED! FOR I WARNED YOU AND WARNED YOU, YOU DID NOT HEED. also squcks doesn't work, pretty sure. only shucks does.",
            banner: "assets/images/Shucks.jpg",
            engine: "HTML5",
            screenshots: ["assets/images/Shucks.jpg"],
            config: { url: "https://fnf.kdata1.com/2024/shucks-v2-reconstruction/1/" }
        },
        "mc": {
            title: "Minecraft",
            creator: "Mojang and the Eaglercraft team.",
            tags: "3D / Adventure",
            desc: "buddy you think you look strong? you're just a cheap flipping knockoff. Oh no no no, I'm the upgrade. (if yk peak yk)",
            banner: "assets/images/mc.avif",
            engine: "HTML5",
            screenshots: ["assets/images/mc.avif"],
            config: { url: "https://www.autistici.org/eaglercraft/play/EaglercraftX_1.8/JavaScript/" }
        },
        "doo": {
            title: "Scooby-Doo: Creepy Run",
            creator: "123Chase",
            tags: "2D / Runner",
            desc: "scooby doo scooby doo scooby doo scooby doo scooby scooby scooby dooby dooby dooby dooby scooby doo",
            banner: "assets/images/Placeholder.png",
            engine: "Flash",
            screenshots: ["assets/images/Placeholder.png"],
            config: { filename: "scooby-doo-creepy-run" }
        },
        "ultrakill": {
            title: "Ultrakill",
            creator: "New Blood Interactive",
            tags: "Combat / Action",
            desc: "judgement (that's the only thing ik about this activity except v1)",
            banner: "assets/images/UltrakillThumbnail.jpg",
            engine: "HTML5",
            screenshots: ["assets/images/UltrakillThumbnail.jpg"],
            config: { url: "https://moosejayraffe-alt.github.io/UK-web/" }
        },
        "hk": {
            title: "Hollow Knight",
            creator: "Unknown",
            tags: "2D Side-Scroller / Action",
            desc: "shaw (that's the only thing ik about this activity 😭)",
            banner: "assets/images/HollowKnightThumbnail.png",
            engine: "HTML5",
            screenshots: ["assets/images/HollowKnightThumbnail.png"],
            config: { url: "https://moosejayraffe-alt.github.io/hollow-knight/" }
        },
        "faketsb": {
            title: "TSB for Larpers",
            creator: "Genuinely unknown bro what",
            tags: "Combat / Action",
            desc: "tsb but fake version, only sonic and naoya mains would play this bro",
            banner: "assets/images/Placeholder.png",
            engine: "HTML5",
            screenshots: ["assets/images/Placeholder.png"],
            config: { url: "https://app-423312.games.s3.yandex.net/423312/b2rilj3xzenwusikhr4jng7rpes3i7hd_brotli/index.html?sdk=%2Fsdk%2F_%2Fv2.c9dd7fdd48522a0f7d44.js#origin=https%3A%2F%2Fyandex.com&app-id=423312&device-type=desktop" }
        }, //
        "lgtwiddlefingers": {
            title: "Friday Night Funkin': TWIDDLEFINGERS! (Lyrics version)",
            creator: "Luke Goji, and the Twiddlefingers team as well as FNF's.",
            tags: "Rhythm / Action",
            desc: "'I'll flush everything right down the toilet!' that line is a skibidi toilet reference i get it cuz maxdesignpro does skibidi toilet videos",
            banner: "assets/images/TwiddlefingersThumbnail.jpg",
            engine: "HTML5",
            screenshots: ["assets/images/TwiddlefingersThumbnail.jpg"],
            config: { url: "https://fnf.kdata1.com/2024/twiddlefinger-but-full-lyrics/1/" }
        },
        "vsyourself": {
            title: "Friday Night Funkin': Silly Billy",
            creator: "KBHGames, and the Silly Billy team as well as FNF's.",
            tags: "Rhythm / Action",
            desc: "I.. CHOOSE DEATH! ",
            banner: "assets/images/SillyBilly.jpg",
            engine: "HTML5",
            screenshots: ["assets/images/SillyBilly.jpg"],
            config: { url: "https://fnf.kdata1.com/2024/silly-billy-vs-yourself/1/" }
        },
        "etc": {
            title: "Fleeing the Complex",
            creator: "Puffballs United",
            tags: "Flash / THIS IS THE GREATEST PLANNNN",
            desc: "Relive the absolute peak that is Henry Stickmin. Powered by the Ruffle emulator.",
            banner: "assets/images/HenryStickminETCThumbnail.avif",
            engine: "Flash",
            screenshots: ["assets/images/HenryStickminETCThumbnail.avif"],
            config: { filename: "fleeingthecomplexng" }
        },
        "etp": {
            title: "Escaping the Prison",
            creator: "Puffballs United",
            tags: "Flash / THIS IS THE GREATEST PLANNNN",
            desc: "Relive the absolute peak that is Henry Stickmin. Powered by the Ruffle emulator.",
            banner: "assets/images/ETP.jpg",
            engine: "Flash",
            screenshots: ["assets/images/ETP.jpg"],
            config: { filename: "escapingtheprisongame" }
        }, //
        "btb": {
            title: "Breaking the Bank",
            creator: "Puffballs United",
            tags: "Flash / THIS IS THE GREATEST PLANNNN",
            desc: "Relive the absolute peak that is Henry Stickmin. Powered by the Ruffle emulator.",
            banner: "assets/images/BtBRTitle.webp",
            engine: "Flash",
            screenshots: ["assets/images/BtBRTitle.webp"],
            config: { filename: "breakingthebank" }
        },
        "ita": {
            title: "Infiltrating the Airship",
            creator: "Puffballs United",
            tags: "Flash / THIS IS THE GREATEST PLANNNN",
            desc: "Relive the absolute peak that is Henry Stickmin. Powered by the Ruffle emulator.",
            banner: "assets/images/ItARTitle.webp",
            engine: "Flash",
            screenshots: ["assets/images/ItARTitle.webp"],
            config: { filename: "infiltratingtheairshipgame" }
        }, //
         "baldibasics": {
            title: "Baldi's Basics in Education and Learning",
            creator: "Mystman12",
            tags: "Horror / Educational",
            desc: "basics in behavior (i should NOT have mentioned that) ",
            banner: "assets/images/Baldi.webp",
            engine: "HTML5",
            screenshots: ["assets/images/Baldi.webp"],
            config: { url: "https://kdata1.com/5000/2025/baldi-remaster/" }
        },
         "minusb": {
            title: "Baldi's Basics in Education and Learning: -B",
            creator: "Mystman12 and Boolonx",
            tags: "Horror / Educational",
            desc: "bang bang bang bang bang til i take you down down down down i want you in the ground) ",
            banner: "assets/images/Baldi.webp",
            engine: "HTML5",
            screenshots: ["assets/images/Baldi.webp"],
            config: { url: "https://storage.boolonx.com/minusbweb/index.html" }
        },
        "hsdiamond": {
            title: "Stealing the Diamond",
            creator: "Puffballs United",
            tags: "Flash / THIS IS THE GREATEST PLANNNN",
            desc: "Relive the absolute peak that is Henry Stickmin. Powered by the Ruffle emulator.",
            banner: "assets/images/StDRTitle.webp",
            engine: "Flash",
            screenshots: ["assets/images/StDRTitle.webp"],
            config: { filename: "stealingthediamondgame" }
        },
 };

// This is the ONLY place 'supabase' is declared
// Change this line in global.js
window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function checkAuthStatus() {
    // 1. Get the client from the window
    const client = window.supabaseClient;

    // 2. If it's not ready, wait and try again (The "Patient" Loop)
    if (!client) {
        setTimeout(checkAuthStatus, 100);
        return;
    }
    
    // 3. Use 'client' instead of 'supabase'
    const { data: { user } } = await client.auth.getUser();

    if (user) {
        const statusBtn = document.getElementById('user-status');
        const nameEl = document.getElementById('user-name');
        const rankEl = document.getElementById('user-rank');
        const avatarEl = document.getElementById('user-avatar');

        // Smart Pathing: Check if we are in a subfolder
        const isSub = window.location.pathname.includes('experience/') || window.location.pathname.includes('profile/');
        if (statusBtn) statusBtn.href = isSub ? "..profile/" : "profile/";

        if (nameEl) {
            nameEl.innerText = user.user_metadata.display_name || user.email.split('@')[0];
        }
        if (rankEl) rankEl.innerText = "Complex Citizen";
        
        if (avatarEl) {
            if (user.user_metadata.avatar_url) {
                avatarEl.innerHTML = `<img src="${user.user_metadata.avatar_url}" class="rounded-full w-full h-full object-cover border border-cyan-400">`;
            } else {
                const initial = (user.user_metadata.display_name || user.email).charAt(0).toUpperCase();
                avatarEl.innerHTML = `<span class="font-bold text-cyan-400">${initial}</span>`;
            }
        }
    }
}

async function handleSignOut() {
    if (window.supabaseClient) {
        await window.supabaseClient.auth.signOut();
        window.location.href = "..homepage/"; // This takes you back to home
    }
}

async function updateNavIdentity() {
    const client = window.supabaseClient;
    const { data: { user } } = await client.auth.getUser();

    if (user) {
        const { data: profile } = await client
            .from('profiles')
            .select('display_name')
            .eq('id', user.id)
            .single();

        const display = document.getElementById('nav-user-display');
        if (display && profile) {
            display.innerText = profile.display_name;
            display.classList.remove('text-white/40');
            display.classList.add('text-steam-yellow');
        }
    }
}

// --- GLOBAL UI SOUND SYSTEM ---

// Create the audio object (replace with your actual sound file path)
const uiClickSound1 = new Audio('https://moosejayraffe-alt.github.io/JayraffeComplex/assets/audio/buttonclickrelease.wav');
uiClickSound1.volume = 0.35; // Adjust volume so it's not too startling

function playClick() {
    // Reset the sound to the start in case it's clicked rapidly
    uiClickSound1.currentTime = 0;
    uiClickSound1.play().catch(e => console.log("Audio play blocked by browser. Interaction required."));
}

// Function to update the page theme
function applyTheme(theme) {
    // This adds [data-theme="name"] to the <html> tag
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('jayraffe-theme', theme);
}

// Check for saved theme as soon as the script loads
(function() {
    const saved = localStorage.getItem('jayraffe-theme') || 'steam';
    applyTheme(saved);
})();

// Listen for messages from the "Main" page (for Iframes)
window.addEventListener('message', (event) => {
    if (event.data.type === 'THEME_UPDATE') {
        applyTheme(event.data.theme);
    }
});

// Global Listener for all button/link interactions
document.addEventListener('click', (event) => {
    const target = event.target;

    // Check if the clicked element (or its parent) is a button or link
    const isInteractive = target.closest('button') || target.closest('a') || target.closest('.steam-btn');

    if (isInteractive) {
        playClick();
    }
}, true); // Using 'true' for capturing phase ensures it catches the click early

// Call this on load
window.addEventListener('load', updateNavIdentity);

// Check status whenever a page finishes loading
document.addEventListener('load', checkAuthStatus);