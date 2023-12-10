/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'Primary-color': '#1597E4',
        'Card-color': '#FFFFFF',
      },
      borderColor: {
        'Card-border': '#E6E6E6',
      },
      textColor: {
        'Font-dark': '#212121',
        'Font-white': '#FAFAFA',
        'Font-error': '#D86161',
        'Font-placeholder': '#7A7A7A',
      },
    },
  },
  plugins: [],
};
