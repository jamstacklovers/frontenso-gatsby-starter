const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: '30px',
    },
    extend: {
      colors: {
        brand: '#663399',
      },
    },
  },
  variants: {},
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/*.svg'],
};
