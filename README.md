# InkEcho 🌑

> *"Where ink becomes voice, and voice becomes echo."*

**InkEcho** is not just a poetry website; it is a cinematic, atmospheric anthology designed to immerse the reader in the emotion of the written word. 

Built with **React**, **TypeScript**, and **Framer Motion**, it moves away from static layouts to create a living, breathing interface where the environment adapts to the mood of the poetry—from the melancholic drift of dust particles to the rising glow of hope.

---

## 📽️ Experience

### **Atmosphere First**
The interface feels less like a web page and more like a film. It utilizes:
*   **Procedural Particle Systems**: Custom particle effects that change behavior based on the poem's emotion (e.g., falling petals for *Love*, rising motes for *Nature*, sharp twinkles for *Dreams*).
*   **Cinematic Grain & Lighting**: A global noise overlay and dynamic ambient gradients create a tactile, filmic texture.
*   **3D Depth**: Poem cards utilize 3D tilt interactions and parallax scrolling to create a sense of physical space.

### **WhisperReader™**
Reading is an active experience. The **WhisperReader** component breaks poems down into interactive elements:
*   Words ripple when touched, like water.
*   Stanzas fade in with a "breath" animation.
*   The reading environment isolates the user, dimming the world around the text.

### **Mood Resonance**
Users can filter the anthology by emotional resonance:
*   **Ether (All)**: The void.
*   **Pulse (Love)**: Heartbeat and warmth.
*   **Shadow (Melancholy)**: Deep waters and blue hues.
*   **Astral (Dreams)**: Starlight and violet mists.
*   **Bloom (Nature)**: Earth and organic motion.

---

## 🛠️ Tech Stack

*   **Core**: React 19, TypeScript
*   **Build Tool**: Vite
*   **Animation**: Framer Motion (Complex orchestration, layout transitions)
*   **Styling**: Tailwind CSS (Utility-first styling, glassmorphism)
*   **Icons**: Lucide React

---

## 🚀 Running Locally

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/ink-echo.git
    cd ink-echo
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the cinematic engine**
    ```bash
    npm run dev
    ```

4.  **Open your browser**
    Navigate to `http://localhost:5173` (or the port shown in your terminal).

---

## 🚢 Deployment

This project is configured for **GitHub Pages** via GitHub Actions.

1.  Push your changes to the `main` branch.
2.  The workflow in `.github/workflows/deploy.yml` will automatically build and deploy the site.
3.  Ensure your GitHub Repository Settings > Pages source is set to `gh-pages` branch.

---

## 📂 Project Structure

```
ink-echo/
├── components/         # UI Building Blocks
│   ├── AmbientBackground.tsx  # The logic for mood-based particles
│   ├── PoemCard.tsx           # 3D Tilt cards
│   ├── PoemModal.tsx          # The immersive reading view
│   ├── WhisperReader.tsx      # Text animation engine
│   └── ...
├── constants.ts        # The Poetry Content & Theme Configurations
├── types.ts            # TypeScript Interfaces
├── App.tsx             # Main Composition
└── ...
```

---

## 🖋️ Author

Designed & Developed by **Divi Coded**.
*A digital sanctuary for words left unspoken.*

