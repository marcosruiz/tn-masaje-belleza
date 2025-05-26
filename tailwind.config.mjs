
import tailwind from "@astrojs/tailwind";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */

export default {
  integrations: [tailwind()],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f9f7f3",
          100: "#f0ede4",
          200: "#e0d9c8",
          300: "#ccc0a5",
          400: "#bdaa8a",
          500: "#a88e67",
          600: "#9b7c5b",
          700: "#81654d",
          800: "#6a5342",
          900: "#564438",
          950: "#2e231c",
        },
        "Indian-Khaki": {
          50: "#f9f7f3",
          100: "#f0ede4",
          200: "#e0d9c8",
          300: "#ccc0a5",
          400: "#bdaa8a",
          500: "#a88e67",
          600: "#9b7c5b",
          700: "#81654d",
          800: "#6a5342",
          900: "#564438",
          950: "#2e231c",
        },
        "Spicy-Mix": {
          50: "#f7f3ef",
          100: "#eae1d7",
          200: "#d6c5b2",
          300: "#bfa185",
          400: "#ac8363",
          500: "#9d7155",
          600: "#805744",
          700: "#6d463b",
          800: "#5c3e37",
          900: "#513632",
          950: "#2e1c1a",
        },
      },
      fontFamily: {
        CormorantGaramond: ["CormorantGaramond", "serif"],
        PlayfairDisplay: ["PlayfairDisplay", "serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [typography],
};


