/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      vs: '320px',
      ls: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
      xxxl: '1800px'
    },
    extend: {
      colors: {
        tet: '#56002b',
        bluedark: '#272D4E',
        primary: '#FF8A00',
        secondary: '#575757',
        purplePrimary: '#683CB8',
        darkRed: '#6f2a08'
      },
      fontFamily: {
        ale: ['sans-serif']
      }
    }
  },
  variants: {
    extend: {
      visibility: ['hover', 'group-hover'],
      borderRadius: ['first', 'last'],
      borderWidth: ['first', 'last'],
      ringWidth: ['hover'],
      zIndex: ['hover'],
      maxHeight: ['group-hover']
    }
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue'
  ]
}
