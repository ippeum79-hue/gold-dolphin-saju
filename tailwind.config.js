/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060A13',
          900: '#0A0F1D',
          850: '#0E1528',
          800: '#111827',
          700: '#1E293B',
        },
        gold: {
          100: '#FDFBF7',
          200: '#F9F1DC',
          300: '#EED9A1',
          400: '#E5C46B',
          500: '#D4AF37',
          600: '#B89326',
          700: '#927318',
        },
      },
      fontFamily: {
        serif: ['Noto Serif KR', 'Batang', 'Times New Roman', 'serif'],
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
