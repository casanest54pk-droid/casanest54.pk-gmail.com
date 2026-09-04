/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: {
          DEFAULT: "#FBF7F1",
          50: "#FFFFFF",
          100: "#FBF7F1",
          200: "#F3ECE1",
        },
        ink: {
          DEFAULT: "#262220",
          soft: "#544D48",
          faint: "#8C837C",
        },
        sienna: {
          DEFAULT: "#A8562F",
          50: "#FBEEE7",
          100: "#F2D3C1",
          400: "#C07647",
          500: "#A8562F",
          600: "#8B4325",
          700: "#6E351D",
        },
        sage: {
          DEFAULT: "#6B7A5E",
          100: "#E6EBE1",
          400: "#849376",
          500: "#6B7A5E",
          600: "#54604A",
        },
        brass: {
          DEFAULT: "#C9973F",
          100: "#F5E9CF",
          500: "#C9973F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(38,34,32,0.06), 0 8px 24px -12px rgba(38,34,32,0.18)",
        soft: "0 1px 2px rgba(38,34,32,0.05)",
        premium: "0 2px 4px rgba(38,34,32,0.04), 0 20px 48px -16px rgba(38,34,32,0.22)",
        glow: "0 0 0 4px rgba(168,86,47,0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "pop": {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        "heart-pop": {
          "0%": { transform: "scale(1)" },
          "35%": { transform: "scale(1.35)" },
          "60%": { transform: "scale(0.92)" },
          "100%": { transform: "scale(1)" },
        },
        "check-pop": {
          "0%": { transform: "scale(0.5)", opacity: 0 },
          "60%": { transform: "scale(1.08)", opacity: 1 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        "check-draw": {
          "0%": { strokeDashoffset: 48 },
          "100%": { strokeDashoffset: 0 },
        },
        "ring-grow": {
          "0%": { transform: "scale(0.8)", opacity: 0.6 },
          "100%": { transform: "scale(1.6)", opacity: 0 },
        },
        "confetti-fall": {
          "0%": { transform: "translateY(-10px) rotate(0deg)", opacity: 1 },
          "100%": { transform: "translateY(120px) rotate(240deg)", opacity: 0 },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "progress-fill": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.5s ease-out both",
        "pop": "pop 0.2s ease-out both",
        "heart-pop": "heart-pop 0.5s ease-out",
        "check-pop": "check-pop 0.45s cubic-bezier(0.34,1.56,0.64,1) both",
        "check-draw": "check-draw 0.5s ease-out 0.15s both",
        "ring-grow": "ring-grow 0.6s ease-out both",
        "confetti-fall": "confetti-fall 1.1s ease-in both",
        "shimmer": "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};
