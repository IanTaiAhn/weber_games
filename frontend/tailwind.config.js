/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,jsx,tx,txs,html}",
    "./public/piggy_game/**/*.{js,html}",
  ],
  theme: {
    extend: {
      keyframes: {
        growDivMidTRight: {
          "0%": { transform: "translateX(0)", width: "50%" },
          "100%": { transform: "translateX(100%)", width: "50%" },
        },
        growDivMidTLeft: {
          "0%": { transform: "translateX(0)", width: "50%" },
          "100%": { transform: "translateX(-100%)", width: "50%" },
        },
        fadeInSlow: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scaleUp: {
          "0%": { transform: "scale(1.0)" },
          "100%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        divGrowFromMidToRight: "growDivMidTRight 1s linear",
        divGrowFromMidToLeft: "growDivMidTLeft 1s linear",
        fadeInSlow: "fadeInSlow 3s",
        scaleUp: "scaleUp 1s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
