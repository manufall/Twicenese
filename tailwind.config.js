/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    fontFamily: {
      'heading' : ['Antonio'],
      'mono' : ['Cutive Mono'],
    },
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      colors: {
        p: '#ec4899',
        s: '#52525b',
        ds: '#6d6d73',
        ph: '#db2777',
        b: '#18181b',
      },
    },
  },
  plugins: [],
}
