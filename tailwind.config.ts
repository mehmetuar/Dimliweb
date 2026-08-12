import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        turf: {
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
        },
        pitch: {
          // Yumuşak koyu (elevated): saf siyah/near-black kalktı, taban açıldı.
          // Hiyerarşi: deep (inset/çerçeve) < DEFAULT (sayfa) < surface (yükseltilmiş kart).
          DEFAULT: "#172236",
          surface: "#223350",
          deep: "#0e1626",
        },
        ember: {
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
        },
      },
      boxShadow: {
        // Daha ince/premium: neon şiddeti düşürüldü, ağır siyah gölge yumuşatıldı.
        neon: "0 0 10px rgba(34,197,94,0.32), 0 0 20px rgba(34,197,94,0.14)",
        "neon-sm": "0 0 5px rgba(34,197,94,0.28)",
        "neon-ember": "0 0 10px rgba(249,115,22,0.32), 0 0 20px rgba(249,115,22,0.14)",
        "neon-ember-sm": "0 0 5px rgba(249,115,22,0.28)",
        "glow-ember": "0 0 26px rgba(249,115,22,0.16), 0 14px 34px rgba(0,0,0,0.34)",
        "neon-lift": "0 18px 44px -14px rgba(34,197,94,0.30), 0 0 20px rgba(34,197,94,0.14)",
        "neon-ember-lift": "0 18px 44px -14px rgba(249,115,22,0.30), 0 0 20px rgba(249,115,22,0.14)",
        // Nötr yükseltme gölgesi (kart hover — premium, renk yok).
        "lift": "0 16px 40px -18px rgba(0,0,0,0.55)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "menu-in": {
          "0%": { opacity: "0", transform: "translateY(-6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // Sinematik hero scroll ipucu: chevronlar sırayla belirip aşağı akar
        "hint-flow": {
          "0%": { opacity: "0", transform: "translateY(-4px)" },
          "35%": { opacity: "1" },
          "70%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "0", transform: "translateY(6px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out",
        "slide-up": "slide-up 0.5s cubic-bezier(0.16,1,0.3,1)",
        "scale-in": "scale-in 0.2s ease-out",
        "menu-in": "menu-in 0.22s ease-out",
        "hint-flow": "hint-flow 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
