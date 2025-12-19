/**
 * THE GRAND SCHEME - Logic Engine
 * From: The Ensemble (Source + Architect + Scaler)
 * Status: CLOSED CIRCUIT EXECUTION
 * 
 * This is not theory. This is the machine.
 */

// =============================================================================
// PART 1: THE SONG INPUT SORTER
// =============================================================================

const PATHWAY_KEYWORDS = {
    rage: {
        keywords: ['burn', 'fight', 'hate', 'break', 'enemy', 'war', 'fire', 'scream', 
                   'angry', 'rage', 'fuck', 'kill', 'destroy', 'smash', 'blood', 
                   'explode', 'revenge', 'furious', 'violent'],
        redirect: 'wastegate',
        protocol: 'THE WASTEGATE'
    },
    exhaustion: {
        keywords: ['tired', 'done', 'sleep', 'heavy', 'drain', "can't", 'empty',
                   'exhausted', 'worn', 'burnt', 'anymore', 'give up', 'collapse', 
                   'weight', 'depleted', 'fumes'],
        redirect: 'ac-engine',
        protocol: 'THE AC ENGINE'
    },
    numbness: {
        keywords: ['void', 'nothing', 'gray', 'dying', 'cold', 'silence',
                   'numb', 'hollow', 'grey', 'dead', 'frozen', "don't care", 
                   'whatever', 'blank', 'feel nothing'],
        redirect: 'beacon',
        protocol: 'THE BEACON'
    },
    spinning: {
        keywords: ['thinking', 'loop', 'anxiety', 'crazy', 'mind', 'stop',
                   'thoughts', "won't stop", 'insane', 'over and over', 
                   "can't sleep", 'panic', 'worry', 'spiral', 'racing'],
        redirect: 'ground-wire',
        protocol: 'THE GROUND WIRE'
    },
    trapped: {
        keywords: ['stuck', 'cage', 'walls', 'prison', 'alone', 'help',
                   'trapped', 'no way', 'escape', 'no exit', 'suffocate', 
                   'drown', 'closing', "can't leave", 'cornered'],
        redirect: 'open-hand',
        protocol: 'THE OPEN HAND'
    }
};

/**
 * Analyzes user input (song title/lyrics) and returns matching pathway
 * @param {string} input - The user's song or lyrics input
 * @returns {object} - { pathway: string, protocol: string, redirect: string }
 */
function analyzeInput(input) {
    if (!input || !input.trim()) {
        return { pathway: null, protocol: null, redirect: 'status' };
    }

    const normalizedInput = input.toLowerCase();

    for (const [pathway, data] of Object.entries(PATHWAY_KEYWORDS)) {
        for (const keyword of data.keywords) {
            if (normalizedInput.includes(keyword)) {
                return {
                    pathway: pathway,
                    protocol: data.protocol,
                    redirect: data.redirect
                };
            }
        }
    }

    // No match found - go to status screen for manual selection
    return { pathway: null, protocol: null, redirect: 'status' };
}

// =============================================================================
// PART 2: THE CITY GATE LOGIC
// =============================================================================

const CITY_GATE = {
    riddle: "What have you found in the dark that has enough weight to hold the light?",
    validKeys: ['wisdom', 'growth', 'love', 'self-respect', 'understanding', 'truth',
                'hope', 'strength', 'purpose', 'faith', 'courage', 'peace'],
    failureResponse: "You are looking at the clouds. The current is in the wire.",
    successResponse: "The gate opens. Welcome to The City.",
    audioFile: 'between-the-ticks.mp3'
};

/**
 * Validates the City Gate answer
 * @param {string} answer - User's answer to the riddle
 * @returns {object} - { valid: boolean, message: string }
 */
function validateCityGate(answer) {
    if (!answer || !answer.trim()) {
        return {
            valid: false,
            message: "The gate requires an answer."
        };
    }

    const normalizedAnswer = answer.toLowerCase().trim();
    
    // Check for valid keys
    for (const key of CITY_GATE.validKeys) {
        if (normalizedAnswer.includes(key)) {
            return {
                valid: true,
                message: CITY_GATE.successResponse
            };
        }
    }

    return {
        valid: false,
        message: CITY_GATE.failureResponse
    };
}

/**
 * Unlocks the City content when gate is passed
 */
function unlockCity() {
    // Remove blur from content
    const blurredElements = document.querySelectorAll('.city-locked, .blur');
    blurredElements.forEach(el => {
        el.classList.remove('city-locked', 'blur');
        el.classList.add('city-unlocked');
    });

    // Play the audio
    playBetweenTheTicks();

    // Trigger Samaritan Pulse on entry
    triggerSamaritanPulse();

    // Store entry in local storage
    localStorage.setItem('cityEntry', JSON.stringify({
        enteredAt: new Date().toISOString(),
        method: 'gate'
    }));
}

/**
 * Plays the Between the Ticks audio
 */
function playBetweenTheTicks() {
    const audio = document.getElementById('cityAudio');
    if (audio) {
        audio.volume = 0.3;
        audio.play().catch(e => console.log('Audio autoplay blocked:', e));
    }
}

/**
 * Triggers the Samaritan Pulse animation
 */
function triggerSamaritanPulse() {
    const pulseElements = document.querySelectorAll('.pulse-icon, .samaritan-icon, .open-hand-icon');
    pulseElements.forEach(el => {
        el.classList.add('pulse-active');
    });
}

// =============================================================================
// PART 3: THE BLACK BOOK PROTOCOLS (Content)
// =============================================================================

const BLACK_BOOK_PROTOCOLS = {
    wastegate: {
        name: 'THE WASTEGATE',
        forState: 'RAGE',
        content: `Anger is not a sin; it is potential energy. Do not swallow the poison. 
                  Write it down. Burn the paper. Run until your lungs burn. 
                  Let the steam out so the engine doesn't blow.`,
        key: "The energy wants OUT. Give it a door that doesn't destroy what you're building.",
        color: '#ff4444'
    },
    'ac-engine': {
        name: 'THE AC ENGINE',
        forState: 'EXHAUSTION',
        content: `You are stuck in DC power (constant drain). Switch to AC (High/Low). 
                  If you are thinking, stop and do with your hands. 
                  If you are working, stop and feel. Oscillate to survive.`,
        key: "The system wasn't designed for constant output. Alternate. Rest is not weakness—it's engineering.",
        color: '#ffaa00'
    },
    beacon: {
        name: 'THE BEACON',
        forState: 'NUMBNESS',
        content: `Do not chase the light. Be the lighthouse. Stand still. Keep the signal running. 
                  The ships will find you when they are ready. Presence is the only requirement.`,
        key: "You don't have to feel it for it to be real. Just keep the light on.",
        color: '#4a9eff'
    },
    'ground-wire': {
        name: 'THE GROUND WIRE',
        forState: 'SPINNING',
        content: `Diagnostic: Is this a Snake (Immediate Threat) or a Hug (Safety)? 
                  If you are safe, touch the floor. Name 5 things you see. 
                  Ground the voltage into the earth.`,
        key: "Your body knows the difference between real danger and remembered danger. Ask it.",
        color: '#aa44aa'
    },
    'open-hand': {
        name: 'THE OPEN HAND',
        forState: 'TRAPPED',
        content: `The trap is the fist. The freedom is the open palm. 
                  We do not grasp; we offer. Transparency is the only key that unlocks this cage.`,
        key: "No one enters the City without Radical Transparency. You can't build a house on a lie.",
        color: '#44aa44'
    }
};

/**
 * Gets protocol content for a pathway
 * @param {string} pathway - The pathway identifier
 * @returns {object} - Protocol content object
 */
function getProtocol(pathway) {
    return BLACK_BOOK_PROTOCOLS[pathway] || null;
}

/**
 * Renders a protocol card dynamically
 * @param {string} pathway - The pathway identifier
 * @param {HTMLElement} container - Container to render into
 */
function renderProtocolCard(pathway, container) {
    const protocol = getProtocol(pathway);
    if (!protocol || !container) return;

    container.innerHTML = `
        <div class="protocol-card" style="border-left-color: ${protocol.color};">
            <div class="protocol-header">
                <span class="protocol-label">PROTOCOL</span>
                <span class="protocol-name">${protocol.name}</span>
            </div>
            <div class="protocol-body">
                <p class="protocol-content">${protocol.content}</p>
                <div class="protocol-key">
                    <strong>THE KEY</strong>
                    <p>${protocol.key}</p>
                </div>
            </div>
        </div>
    `;
}

// =============================================================================
// PART 4: UTILITY FUNCTIONS
// =============================================================================

/**
 * Screen navigation handler
 */
let currentScreen = 'landing';

function showScreen(screenId) {
    const current = document.getElementById(currentScreen);
    const next = document.getElementById(screenId);
    
    if (current) current.classList.remove('active');
    if (next) {
        next.classList.add('active');
        currentScreen = screenId;
        window.scrollTo(0, 0);
    }
}

/**
 * Song analysis trigger
 */
function analyzeSong() {
    const input = document.getElementById('songInput');
    if (!input) return;

    const userSong = input.value.trim();
    const result = analyzeInput(userSong);

    // Store the song
    if (userSong) {
        localStorage.setItem('userSong', userSong);
        const echo = document.getElementById('songEcho');
        if (echo) echo.textContent = `"${userSong}"`;
    }

    // Show analyzing screen briefly, then redirect
    showScreen('analyzing');
    
    setTimeout(() => {
        if (result.pathway) {
            showScreen(result.pathway);
        } else {
            showScreen('status');
        }
    }, 2000);
}

/**
 * City Gate submission handler
 */
function submitGateAnswer() {
    const input = document.getElementById('gateInput');
    const response = document.getElementById('gateResponse');
    
    if (!input) return;

    const result = validateCityGate(input.value);
    
    if (response) {
        response.textContent = result.message;
        response.className = result.valid ? 'gate-response success' : 'gate-response failure';
    }

    if (result.valid) {
        setTimeout(unlockCity, 1500);
    }
}

/**
 * Initialize on page load
 */
document.addEventListener('DOMContentLoaded', function() {
    // Check if user has already entered the City
    const cityEntry = localStorage.getItem('cityEntry');
    if (cityEntry && window.location.pathname.includes('city')) {
        // Auto-unlock for returning citizens
        setTimeout(unlockCity, 500);
    }

    // Initialize first screen
    const landing = document.getElementById('landing');
    if (landing) landing.classList.add('active');

    // Add enter key support for inputs
    const songInput = document.getElementById('songInput');
    if (songInput) {
        songInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') analyzeSong();
        });
    }

    const gateInput = document.getElementById('gateInput');
    if (gateInput) {
        gateInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') submitGateAnswer();
        });
    }
});

// =============================================================================
// EXPORTS FOR MODULE USE
// =============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        analyzeInput,
        validateCityGate,
        getProtocol,
        BLACK_BOOK_PROTOCOLS,
        PATHWAY_KEYWORDS,
        CITY_GATE
    };
}
