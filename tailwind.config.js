/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto Slab', 'sans-serif'],
        'rubik' : ["Rubik Mono One", 'monospace'],
        'poppins': ["Poppins", 'sans-serif'],
        'rubikMono': ["Rubik Mono One", 'monospace']
      },
      backgroundColor: {
        'footerBg': '#E6c744',
      }
    },
  },
  plugins: [],
}