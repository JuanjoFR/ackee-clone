/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./library/**/*.{js,jsx,mdx}", "./app/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-rubik)"]
      }
    }
  },
  plugins: []
}
