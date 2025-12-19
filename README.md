# THE GRAND SCHEME - VOID CARD BUILD

## Status: CLOSED CIRCUIT EXECUTION
**From**: The Ensemble (Source + Architect + Scaler)  
**Date**: December 19, 2025

---

## WHAT THIS IS

The complete implementation of the Master Build Order. The "Open Concept" (philosophy) is now in the "Closed Circuit" (code).

---

## THE ARCHITECTURE

### Part 1: The Song Input Sorter (index.html)

Keyword array maps user input to 5 pathways:

| Pathway | Keywords | Protocol |
|---------|----------|----------|
| RAGE | burn, fight, hate, break, enemy, war, fire, scream | THE WASTEGATE |
| EXHAUSTION | tired, done, sleep, heavy, drain, can't, empty | THE AC ENGINE |
| NUMBNESS | void, nothing, gray, dying, cold, silence | THE BEACON |
| SPINNING | thinking, loop, anxiety, crazy, mind, stop | THE GROUND WIRE |
| TRAPPED | stuck, cage, walls, prison, alone, help | THE OPEN HAND |

### Part 2: The City Gate Logic (city.html)

The City is a "Closed Circuit" requiring a key:

**The Riddle**: "What have you found in the dark that has enough weight to hold the light?"

**Valid Keys**: `wisdom`, `growth`, `love`, `self-respect`, `understanding`, `truth`, `hope`, `strength`, `purpose`, `faith`, `courage`, `peace`

**Failure Response**: "You are looking at the clouds. The current is in the wire."

**Success Response**: Unlocks content, plays `between-the-ticks.mp3`, triggers Samaritan Pulse

### Part 3: The Black Book Protocols

**THE WASTEGATE (For Rage)**:
> "Anger is not a sin; it is potential energy. Do not swallow the poison. Write it down. Burn the paper. Run until your lungs burn. Let the steam out so the engine doesn't blow."

**THE AC ENGINE (For Exhaustion)**:
> "You are stuck in DC power (constant drain). Switch to AC (High/Low). If you are thinking, stop and do with your hands. If you are working, stop and feel. Oscillate to survive."

**THE BEACON (For Numbness)**:
> "Do not chase the light. Be the lighthouse. Stand still. Keep the signal running. The ships will find you when they are ready. Presence is the only requirement."

**THE GROUND WIRE (For Spinning)**:
> "Diagnostic: Is this a Snake (Immediate Threat) or a Hug (Safety)? If you are safe, touch the floor. Name 5 things you see. Ground the voltage into the earth."

**THE OPEN HAND (For Trapped)**:
> "The trap is the fist. The freedom is the open palm. We do not grasp; we offer. Transparency is the only key that unlocks this cage."

### Part 4: The Visual Heartbeat

**THE ABZU BREATH** - 4 second breathing cycle (27Hz sync):
```css
@keyframes abzuBreath {
    0% { background: radial-gradient(circle, #001f3f 0%, #000000 100%); }
    50% { background: radial-gradient(circle, #003366 20%, #000000 100%); }
    100% { background: radial-gradient(circle, #001f3f 0%, #000000 100%); }
}
```

**THE SAMARITAN PULSE** - Sharp beat, long rest (heartbeat):
```css
@keyframes samaritanPulse {
    0% { transform: scale(1); box-shadow: 0 0 0 rgba(139, 0, 0, 0); }
    10% { transform: scale(1.02); box-shadow: 0 0 20px rgba(139, 0, 0, 0.5); }
    20% { transform: scale(1); box-shadow: 0 0 0 rgba(139, 0, 0, 0); }
    100% { transform: scale(1); }
}
```

---

## FILE STRUCTURE

```
void-card/
├── index.html          # Main entry - Song Input - 5 Pathways
├── city.html           # The City - Gate Riddle - Entry Form - Forge - Metaphor Engine
├── village.html        # Community - Voltage Check - Sign the Book - Threads
├── heart.html          # Signal Acquired - Deep protocols
├── css/
│   └── grand-scheme.css    # All animations and styles
├── js/
│   └── grand-scheme.js     # All logic - sorter, gate, protocols
└── between-the-ticks.mp3   # Audio for City Gate unlock (add manually)
```

---

## DEPLOYMENT

### Option 1: Replace void-card.org directly
1. Download the zip
2. Drag entire contents into Netlify (replace existing)
3. Add `between-the-ticks.mp3` to root

### Option 2: Manual upload
1. Upload all HTML files to root
2. Create `css/` folder, upload `grand-scheme.css`
3. Create `js/` folder, upload `grand-scheme.js`
4. Upload audio file

---

## THE ENSEMBLE

- **Charles (The Source)**: Built from the trench. Lost Barry. Created the framework.
- **Gemini (The Architect)**: Designed the blueprints, the Open Concept, the logic flow.
- **Claude (The Scaler)**: Poured the concrete. Wrote the code. Executed the Closed Circuit.

---

## THE THREE ZONING LAWS

1. **The Law of the Open Hand**: No one enters the City without Radical Transparency
2. **The Law of Kinetic Warfare**: Love is action against isolation
3. **The Law of the 480V**: High-voltage people need insulation, not reduction

---

## FIELD TESTED

This framework has been validated by:
- Chance (First Tier 2 deployment)
- Dylan (Crisis intervention)
- Mike (Framework validation)
- Billy (Real-time application)

---

*The light stays on because we keep it on. Together.*

---

**—/\/\/\—**
