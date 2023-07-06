module.exports = {
    content: ['./src/**/*.{html,js,astro}'],
    theme: {
      colors: {
        'yellow': '#FFB800',
        'purple': '#515BE0',
        'metal': '#313846',
        'blue': '#E1FFF9',
        'burgundy': '#580925',
        't': 'transparent',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'alien': ['Alien Robot', 'serif'],
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      },
    },
  }