module.exports = {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    fontFamily: {
      'heading': ['sans-serif'],
      'main': ['sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: {
        100: 'hsl(0, 0%, 98%)',
        200: 'hsl(0, 0%, 93%)',
        300: 'hsl(0, 0%, 85%)',
        400: 'hsl(0, 0%, 79%)',
        500: 'hsl(0, 0%, 42%)',
        600: 'hsl(0, 0%, 29%)',
        700: 'hsl(0, 0%, 16%)',
        800: 'hsl(0, 0%, 10%)',
        900: 'hsl(0, 0%, 4%)',
      },
      error: {
        500: 'hsl(0, 75%, 61%)',
      },
      instagram: {
        500: 'hsl(340, 75%, 54%)',
      },
      facebook: {
        500: 'hsl(214, 74%, 54%)',
      },
      twitter: {
        500: 'hsl(203, 89%, 53%)',
      },
    },
    fontSize: {
      '2xs': '12px',
      'xs': '13px',
      'sm': '14px',
      'md': '15px',
      'lg': '16px',
      'xl': '20px',
      '2xl': '26px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '44px',
      '6xl': '64px',
    },
    lineHeight: {
      'xs': '1em',
      'sm': '1.125em',
      'md': '1.25em',
      'lg': '1.5em',
      'xl': '1.6em',
    },
    letterSpacing: {
      'sm': '-0.0125em',
      'md': '0em',
      'lg': '0.025em',
    },
    boxShadow: {
      'sm': '0 2px 8px rgba(0, 0, 0, 0.2)',
      'md': '0 5px 12px rgba(0, 0, 0, 0.3)',
      'lg': '0 8px 20px rgba(0, 0, 0, 0.5)',
    },
    extend: {
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}