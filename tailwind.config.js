/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#545FE6",
        secondary: "#9D54E6",
        storllyblack: "#253543",
        textColor: "#505C68",
      },
      backgroundImage: {
        "app-pattern": "url('../public/images/sectionbg.svg')",
        "banner-bg": "url('../public/images/banner.svg')",
        "explore-bg": "url('../public/images/explorebg2.svg')",
      },
    },
  },
  plugins: [],
};
