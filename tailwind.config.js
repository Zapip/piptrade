/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        
        primary: {
          DEFAULT: '#3749A6',
          dark: '#3749A6',
        },
        background: {
          DEFAULT: '#FFFFFF',
          dark: '#273142',
        },
        fourground: {
          DEFAULT: '#F5F6FA',
          dark: '#1B2431',
        },
        complete: '#00B69B',
        running: '#6226EF',
        rejected: '#EF3826',
        caption: '#5A8CFF',
        button: '#4880FF',
        buttonHover: '#417BFF',
        input: {
          DEFAULT: '#F5F6FA',
          dark: '#323D4E',
        },
        border: {
          DEFAULT: '#FFFFFF',
          dark: '#313D4F',
        },
      },
      backgroundImage: {
        'linear-accent':
          'linear-gradient(180deg, rgba(55, 73, 166, 0.55) 0%, rgba(245, 246, 250, 0.10) 49.96%)',
      },
      textColor: {
        t1: {
          DEFAULT: '#202224',
          dark: '#FFFFFF',
        },
        t2: {
          DEFAULT: '#636566',
          dark: '#BEC1C6',
        },
        t3: {
          DEFAULT: '#606060',
          dark: '#FFFFFF',
        },
        tprimary: {
          DEFAULT: '#3749A6',
          dark: '#FFFFFF',
        },
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
    plugins: [],
  },
}
