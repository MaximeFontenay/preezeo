module.exports = {
    content: ['./src/**/*.{html,js,astro,vue}'],
    theme: {
      colors: {
        'yellow': '#FFB800',
        'purple': '#515BE0',
        'metal': '#313846',
        'blue': '#E1FFF9',
        'deep-blue': '#171C26',
        'light-purple': '#E5E6FA',
        'burgundy': '#580925',
        'light': '#EEEFF2',
        't': 'transparent',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'system-ui', 'sans-serif'],
        'alien': ['Alien Robot', 'system-ui', 'sans-serif'],
      },
      extend: {
        width: {
          '1px': '1px',
          '2px': '2px',
          '3px': '3px',
          '4px': '4px',
          '5px': '5px',
          '6px': '6px',
          '7px': '7px',
          '8px': '8px',
          '9px': '9px',
          '10px': '10px',
        },
        spacing: {
          '0': '0px',
          '1': '5px',
          '2': '10px',
          '3': '15px',
          '4': '20px',
          '5': '25px',
          '6': '30px',
          '7': '35px',
          '8': '40px',
          '9': '45px',
          '10': '50px',
          '11': '55px',
          '12': '60px',
          '13': '65px',
          '14': '70px',
          '15': '75px',
          '16': '80px',
          '17': '85px',
          '18': '90px',
          '19': '95px',
          '20': '100px',
          '21': '105px',
          '22': '110px',
          '23': '115px',
          '24': '120px',
          '25': '125px',
          '26': '130px',
          '27': '135px',
          '28': '140px',
          '29': '145px',
          '30': '150px',
        },

        borderRadius: {
          'none': '0',
          'xs': '2px',
          'sm': '4px',
          'md': '6px',
          'lg': '9px',
          'xl': '12px',
          'full': '9999px',
        },

        lineHeight: {
          '0': '0',
          '1': '1',
          '2': '2',
        },

        letterSpacing: {
          '1': '0.24px',
          '2': '0.48px',
          '3': '0.72px',
          '4': '0.96px',
          '5': '1.20px',
        },

        boxShadow: {
          'cardHomepage': '3px 5px 10px 0px rgba(255, 255, 255, 0.25) inset, 0px 4px 15px 0px rgba(0, 0, 0, 0.15);'
        },
        
        screens: {
          'sm': '480px',
          'md': '760px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1340px',
        }
      },
    },
  }