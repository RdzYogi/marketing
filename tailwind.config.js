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
  },
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        '.underline': {
          'text-decoration': 'underline',
          'text-decoration-color': '#FF561e',
        },
      }
      addUtilities(extendUnderline)
    }
  ],
}
