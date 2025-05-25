import typography from "@tailwindcss/typography";

import tailwind from "@astrojs/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  integrations: [tailwind()],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [typography],
};
