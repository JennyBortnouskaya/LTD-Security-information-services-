export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {
      overrideBrowserslist: [
        '>0.2%',
        'not dead',
        'not IE 11'
      ]
    },
  },
}
