/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  content: ['./App.tsx', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12352d',
        olive: '#60723b',
        moss: '#87975d',
        cream: '#f6f8f1',
        sage: '#edf2e6',
        gold: '#e8a21a',
      },
      fontFamily: {
        display: ['Georgia'],
        body: ['Arial'],
      },
    },
  },
  plugins: [],
};
