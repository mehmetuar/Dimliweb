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
          DEFAULT: "#0f172a",
          surface: "#1e293b",
          deep: "#020617",
        },
        ember: {
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
        },
      },
      boxShadow: {
        neon: "0 0 12px rgba(34,197,94,0.5), 0 0 24px rgba(34,197,94,0.25)",
        "neon-sm": "0 0 6px rgba(34,197,94,0.4)",
        "neon-ember": "0 0 12px rgba(249,115,22,0.5), 0 0 24px rgba(249,115,22,0.25)",
        "neon-ember-sm": "0 0 6px rgba(249,115,22,0.4)",
        "glow-ember": "0 0 40px rgba(249,115,22,0.25), 0 20px 50px rgba(0,0,0,0.6)",
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
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out",
        "slide-up": "slide-up 0.5s cubic-bezier(0.16,1,0.3,1)",
        "scale-in": "scale-in 0.2s ease-out",
        "menu-in": "menu-in 0.22s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
