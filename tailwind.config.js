/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['custom1','CustomFont', 'sans-serif'],  // Add the custom font here
      },
    },
  },
  plugins: [],
}

