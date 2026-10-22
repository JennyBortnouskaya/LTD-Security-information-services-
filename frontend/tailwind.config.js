/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#27214A',
          light: '#695ea5',
          hover: '#504688',
        },
        accent: {
          DEFAULT: '#9184e6',
          light: '#dfdbf9',
        },
        text: {
          primary: '#434040',
          dark: '#212529',
          placeholder: '#9fa3ad',
          label: '#9b9b9b',
        },
        footer: {
          DEFAULT: '#49484C',
          dark: '#626161',
          hover: '#b7b5b5',
        },
      },
      fontFamily: {
        futura: ['Futura PT', 'serif'],
      },
      fontSize: {
        'base': '16px',
        'lg': '18px',
        'xl': '24px',
        '2xl': '28px',
        '3xl': '48px',
        '4xl': '52px',
      },
      lineHeight: {
        'sm': '21px',
        'base': '23px',
        'lg': '28px',
        'xl': '31px',
        '2xl': '36px',
        '3xl': '62px',
      },
      spacing: {
        'sm': '10px',
        'md': '100px',
        'lg': '134px',
      },
      borderRadius: {
        'sm': '10px',
      },
      transitionDuration: {
        'fast': '0.2s',
        'base': '0.5s',
      },
    },
  },
  plugins: [],
}
