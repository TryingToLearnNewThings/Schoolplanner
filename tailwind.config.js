/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
    colors: {
      custom: {
        "primary": "rgba(161, 130, 69, 0.800)",
        },
      },
    },
  },
  plugins: [],
}

