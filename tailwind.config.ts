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
        'secondary-main': 'rgb(17, 200, 178)',
        'secondary-dark': 'rgba(40, 174, 134, 0.87)',
        'muted-main': '#909090',
      },
      borderColor: {
        'primary-main': '#137FA0',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
