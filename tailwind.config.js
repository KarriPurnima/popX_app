/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        popxPurple: '#6A0FE0',
        popxLight: '#D6BBF5',
      },
    },
  },
  plugins: [],
}