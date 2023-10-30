import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./library/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-rubik)"]
      }
    }
  },
  plugins: []
}
export default config
