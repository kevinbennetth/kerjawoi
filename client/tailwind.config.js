/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#4E4BB7",
        "bright-purple": "#9747FF",
        "dark-purple": "#716DF2",
        "light-purple": "#CAC9F1",
        Purple: "#8985F2",
        "dark-white": "#F6F7FA",
        Orange: "#F2A549",
        Gray: "#989898",
      },
      keyframes: {
        "pop-up": {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
