const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neuebit: ["var(--font-neuebit)"],
        mondwest: ["var(--font-mondwest)"],
        // sans: ["var(--font-worksans"],
      },
      colors: {
        "pixel-black": "#000000",
        "software-grey": "#efefef",
        inspiration: "#b0b0ff",
        disruption: "#ccff50",
        insightful: "#ffd6bb",
        welcoming: "#b8ffee",
      },
      cursor: {
        "edit-cursor": 'url("/assets/img/ttDigitalHandSm.png"), auto',
      },
    },
  },
  plugins: [],
};
