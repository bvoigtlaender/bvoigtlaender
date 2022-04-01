module.exports = {
  content: ['pages/**/*.jsx', 'components/**/*.jsx'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '25%, 75%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      animation: {
        bounce: 'bounce .5s',
        wiggle: 'wiggle .5s ease-in-out',
      },
      boxShadow: {
        backdrop: '0.5em 0.5em #000',
      },
      fontFamily: {
        abril: [
          'Abril Fatface',
          'Georgia',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
      },
    },
  },
  plugins: [],
};
