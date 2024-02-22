/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "desktop-l": { max: "1919px" },
      desktop: { max: "1439px" },
      laptop: { max: "1279px" },
      tablet: { max: "1023px" },
      mobile: { max: "767px" },
      // "small-mobile": { max: "620px" },
    },
  },
  plugins: [],
};
