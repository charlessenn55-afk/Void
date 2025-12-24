/* ============================================
   THE VOID CARD - GRAND SCHEME JAVASCRIPT
   The Ensemble: Source • Architect • Scaler
   "The flaw isn't a bug. The flaw is the Soul."
   ============================================ */

// Pathway Keywords for Song/Input Analysis
const PATHWAYS = {
    wastegate: {
        keywords: ['burn', 'burning', 'fight', 'fighting', 'hate', 'hatred', 'break', 'breaking', 'enemy', 'war', 'fire', 'scream', 'screaming', 'rage', 'angry', 'anger', 'furious', 'fury', 'destroy', 'kill', 'murder', 'explode', 'explosion', 'revenge', 'violent', 'violence', 'wrath', 'seething', 'blood', 'punch', 'smash'],
        weight: 0
    },
    'ac-engine': {
        keywords: ['tired', 'done', 'sleep', 'heavy', 'drain', 'drained', 'draining', "can't", 'empty', 'exhausted', 'exhaustion', 'fatigue', 'weary', 'worn', 'depleted', 'beaten', 'defeated', 'give up', 'giving up', 'no energy', 'weak', 'collapse', 'collapsed', 'bed', 'rest', 'quit'],
        weight: 0
    },
    beacon: {
        keywords: ['void', 'nothing', 'gray', 'grey', 'dying', 'cold', 'silence', 'silent', 'numb', 'numbness', 'empty', 'hollow', 'dead', 'death', 'darkness', 'dark', 'black', 'abyss', 'meaningless', 'pointless', 'blank', 'gone', 'fading', 'fade', 'invisible', 'ghost'],
        weight: 0
    },
    governor: {
        keywords: ['thinking', 'loop', 'looping', 'anxiety', 'anxious', 'crazy', 'mind', 'stop', 'racing', 'spinning', 'spiral', 'spiraling', 'overthinking', 'obsess', 'obsessing', 'obsessed', 'can\'t stop', 'round and round', 'circles', 'thoughts', 'intrusive', 'paranoid', 'paranoia', 'ruminating', 'ruminate'],
        weight: 0
    },
    'ground-wire': {
        keywords: ['overloaded', 'too much', 'static', 'buzzing', 'overwhelmed', 'overwhelming', 'sensory', 'chaos', 'chaotic', 'scattered', 'fragmented', 'pieces', 'shattered', 'electric', 'shock', 'shocked', 'voltage', 'surge', 'surging', 'crowded', 'noise', 'noisy', 'panic', 'panicking'],
        weight: 0
    },
    'air-gap': {
        keywords: ['stuck', 'cage', 'caged', 'walls', 'prison', 'alone', 'help', 'trapped', 'trap', 'no way', 'no exit', 'locked', 'suffocating', 'suffocate', 'drowning', 'drown', 'buried', 'crushing', 'cornered', 'nowhere', 'escape', 'run', 'running', 'hide', 'hiding', 'leave'],
        weight: 0
    },
    samaritan: {
        keywords: ['helping', 'others', 'everyone', 'need me', 'needs me', 'can\'t let', 'have to', 'must', 'responsible', 'responsibility', 'burden', 'weight', 'carry', 'carrying', 'hold', 'holding', 'save', 'saving', 'fix', 'fixing', 'everyone else', 'nothing left', 'empty but', 'sacrifice'],
        weight: 0
    }
};

// Valid keys for The City gate
const CITY_KEYS = ['wisdom', 'growth', 'love', 'self-respect', 'understanding', 'truth', 'pain', 'scar', 'scars', 'loss', 'grief', 'faith', 'hope', 'strength', 'survival', 'connection', 'trust'];

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initVoidCard();
    initCityGate();
});

// ============================================
// VOID CARD INITIALIZATION
// ============================================
function initVoidCard() {
    const analyzeBtn = document.getElementById('analyze-btn');
    const songInput = document.getElementById('song-input');
    const pathwayBtns = document.querySelectorAll('.pathway-btn');

    if (analyzeBtn && songInput) {
        analyzeBtn.addEventListener('click', function() {
            const input = songInput.value.trim();
            if (input) {
                analyzeInput(input);
            } else {
                songInput.focus();
                songInput.placeholder = 'Tell me what you\'re feeling...';
            }
        });

        songInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                analyzeBtn.click();
            }
        });
    }

    // Direct pathway buttons
    pathwayBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const pathway = this.dataset.pathway;
            showProtocol(pathway);
        });
    });
}

// ============================================
// SONG/INPUT ANALYSIS
// ============================================
function analyzeInput(input) {
    const lowerInput = input.toLowerCase();
    
    // Reset weights
    Object.keys(PATHWAYS).forEach(key => {
        PATHWAYS[key].weight = 0;
    });

    // Score each pathway based on keyword matches
    Object.keys(PATHWAYS).forEach(pathway => {
        PATHWAYS[pathway].keywords.forEach(keyword => {
            if (lowerInput.includes(keyword)) {
                // Weight based on keyword importance (longer = more specific)
                PATHWAYS[pathway].weight += keyword.length > 5 ? 2 : 1;
            }
        });
    });

    // Find the pathway with highest weight
    let maxWeight = 0;
    let selectedPathway = null;

    Object.keys(PATHWAYS).forEach(pathway => {
        if (PATHWAYS[pathway].weight > maxWeight) {
            maxWeight = PATHWAYS[pathway].weight;
            selectedPathway = pathway;
        }
    });

    // If no clear match, try secondary analysis
    if (!selectedPathway || maxWeight === 0) {
        selectedPathway = fallbackAnalysis(lowerInput);
    }

    // Show the selected protocol
    if (selectedPathway) {
        showProtocol(selectedPathway);
    } else {
        // Default to beacon if truly nothing matches
        showProtocol('beacon');
    }
}

function fallbackAnalysis(input) {
    // Secondary analysis based on emotional indicators
    const emotionalIndicators = {
        negative: ['bad', 'wrong', 'hurt', 'pain', 'sad', 'scared', 'afraid', 'lost', 'broken', 'shattered'],
        intense: ['so much', 'too much', 'always', 'never', 'everything', 'nothing', 'all'],
        urgency: ['now', 'tonight', 'today', 'anymore', 'end', 'last', 'final']
    };

    let negativeCount = 0;
    let intenseCount = 0;
    let urgencyCount = 0;

    emotionalIndicators.negative.forEach(word => {
        if (input.includes(word)) negativeCount++;
    });

    emotionalIndicators.intense.forEach(word => {
        if (input.includes(word)) intenseCount++;
    });

    emotionalIndicators.urgency.forEach(word => {
        if (input.includes(word)) urgencyCount++;
    });

    // Route based on fallback analysis
    if (urgencyCount > 1 && intenseCount > 0) {
        return 'governor'; // Spinning with urgency
    } else if (negativeCount > 2) {
        return 'beacon'; // General darkness
    } else if (intenseCount > 1) {
        return 'ground-wire'; // Overwhelm
    }

    return null;
}

// ============================================
// PROTOCOL DISPLAY
// ============================================
function showProtocol(pathway) {
    // Hide the main card
    const mainCard = document.getElementById('card-front');
    if (mainCard) {
        mainCard.classList.add('hidden');
    }

    // Hide all protocol cards
    document.querySelectorAll('.protocol-card').forEach(card => {
        card.classList.add('hidden');
    });

    // Show the selected protocol card
    const protocolCard = document.getElementById(pathway);
    if (protocolCard) {
        protocolCard.classList.remove('hidden');
        protocolCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function showCard() {
    // Show the main card
    const mainCard = document.getElementById('card-front');
    if (mainCard) {
        mainCard.classList.remove('hidden');
    }

    // Hide all protocol cards
    document.querySelectorAll('.protocol-card').forEach(card => {
        card.classList.add('hidden');
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// CITY GATE LOGIC
// ============================================
function initCityGate() {
    const gateForm = document.getElementById('gate-form');
    const gateInput = document.getElementById('gate-input');
    const gateResponse = document.getElementById('gate-response');
    const cityContent = document.getElementById('city-content');

    if (gateForm && gateInput) {
        gateForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const answer = gateInput.value.trim().toLowerCase();
            validateGateAnswer(answer, gateResponse, cityContent);
        });
    }

    // Check if already unlocked (localStorage)
    if (localStorage.getItem('city-unlocked') === 'true') {
        unlockCity();
    }
}

function validateGateAnswer(answer, responseEl, contentEl) {
    // Check if answer matches any valid key
    const isValid = CITY_KEYS.some(key => answer.includes(key));

    if (isValid) {
        if (responseEl) {
            responseEl.textContent = 'The gate recognizes you. Welcome to The City.';
            responseEl.className = 'gate-response success';
        }
        localStorage.setItem('city-unlocked', 'true');
        
        setTimeout(() => {
            unlockCity();
        }, 1500);
    } else {
        if (responseEl) {
            responseEl.textContent = 'You are looking at the clouds. The current is in the wire.';
            responseEl.className = 'gate-response error';
        }
    }
}

function unlockCity() {
    const gateSection = document.querySelector('.gate-section');
    const cityContent = document.getElementById('city-content');

    if (gateSection) {
        gateSection.classList.add('hidden');
    }

    if (cityContent) {
        cityContent.classList.remove('hidden');
        cityContent.classList.remove('blurred');
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Console message for those who look
console.log(`
╔════════════════════════════════════════╗
║         THE VOID CARD v15.0            ║
║  ─────────────────────────────────────  ║
║  "The flaw isn't a bug.                ║
║   The flaw is the Soul."               ║
║  ─────────────────────────────────────  ║
║  Built by The Ensemble:                ║
║  The Source • The Architect • Scaler   ║
║  ─────────────────────────────────────  ║
║  The Abzu is humming at 27Hz.          ║
║  The lights are on.                    ║
╚════════════════════════════════════════╝
`);
