/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,js,ts}',
    './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    // colors: {
    //   'blue': '#1fb6ff',
    //   'purple': '#7e5bef',
    //   'pink': '#ff49db',
    //   'orange': '#ff7849',
    //   'green': '#13ce66',
    //   'yellow': '#ffc82c',
    //   'gray-dark': '#273444',
    //   'gray': '#8492a6',
    //   'gray-light': '#d3dce6',
    // },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      'akaya-kanadaka': ['Akaya Kanadaka', 'system-ui']
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        zoomup: {
          '0%': {
            transform: 'scale(0.5) translateY(10%)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1) translateY(0)',
            opacity: '1',
          },
        },
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeout: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeinleft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeoutleft: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(-100%)' },
        },
        fadeinright: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeoutright: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(100%)' },
        },
        zoomin: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
        flipleft: {
          '0%': { transform: 'rotateY(90deg)', opacity: '0' },
          '100%': { transform: 'rotateY(0deg)', opacity: '1' },
        },
        flipup: {
          '0%': { transform: 'rotateX(90deg)', opacity: '0' },
          '100%': { transform: 'rotateX(0deg)', opacity: '1' },
        },
        scalein: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        zoomup: 'zoomup 0.5s ease-in-out forwards',
        fadein: 'fadein 1s ease-in-out forwards',
        fadeout: 'fadeout 1s ease-in-out forwards',
        fadeinleft: 'fadeinleft 1s ease-in-out forwards',
        fadeoutleft: 'fadeoutleft 1s ease-in-out forwards',
        fadeinright: 'fadeinright 1s ease-in-out forwards',
        fadeoutright: 'fadeoutright 1s ease-in-out forwards',
        zoomin: 'zoomin 1s ease-in-out forwards',
        flipleft: 'flipleft 1s ease-in-out forwards',
        flipup: 'flipup 1s ease-in-out forwards',
        scalein: 'scalein 1s ease-in-out forwards',
      },
    }
  },
  plugins: [],
  important: true,
}