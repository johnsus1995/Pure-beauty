/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#852d3a',
        secondary: '#fdf2db',
        success: '#28A745',
        danger: '#DC3545',
        warning: '#FFC107',
        info: '#17A2B8',
      },
      fontFamily:{
        'nunito': ['nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
