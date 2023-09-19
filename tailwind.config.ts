import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'hover-main': '#106e8b',
      },
      backgroundColor: {
        'primary-main': '#137FA0',
        'accent-main': '#E4F5FF',
        'secondary-main': '#FAFCFF',
      },
      textColor: {
        'primary-main': '#137FA0',
        'primary-light': '#3e9db9',
        'secondary-main': 'rgb(17, 200, 178)',
        'secondary-dark': 'rgba(40, 174, 134, 0.87)',
        'muted-main': '#909090',
        'muted-dark': '#5e5e5e',
        'success-main': 'rgba(40, 174, 134, 0.87)',
        'error-main': '#FF4D5E',
      },
      borderColor: {
        'primary-main': '#137FA0',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'auth-gradient':
          'linear-gradient(78deg, #67EDC5 6.92%, #5EE283 27.43%, #819FD8 51.16%, #B53CE0 71.96%, #4687AE 93.18%)',
      },
    },
  },
  plugins: [],
} satisfies Config
