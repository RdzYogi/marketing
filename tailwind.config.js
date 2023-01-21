/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-button": "#FF561e",
      }
    },
    boxShadow: {
      navbar: "0px 10px 8px 0px rgba(3,3,4,0.03), 0px 1px 2px -1px rgba(3,3,4,0.03)",
    },
    screens: {
      sm: "760px",
      md: "1240px",
      lg: "1340px",
      xl: "1580px",
      "2xl": "1636px",
      "3xl": "1720px",
      "4xl": "1856px",
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
