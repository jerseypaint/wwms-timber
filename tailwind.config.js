module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue' : '#EDF8FD',
        'dark-blue' : '#18314F',
        'brand-blue' : '#2CACE3',
        'bright-green' : '#E6F9AF'
      },
      minHeight: {
        '60vh' : '60vh'
      },
      spacing: {
        '1/2' : '50%'
      },
      fontFamily: {
        'nunito' : '"Nunito Sans", sans-serif',
        'roboto' : '"Roboto", sans-serif'
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      flexDirection: ['even']
    },
  },
  plugins: [],
}
