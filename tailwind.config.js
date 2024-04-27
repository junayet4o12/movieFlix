/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px',
        sm: '676px',
        md: '768px',
        lg: '976px',
        subxl: '1150px',
        xl: '1440px',
      },
      colors: {
        primary: '#000',
        secondary: '#ed1c24',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['light'],
  },
}
