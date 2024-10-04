/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: "#f5f5f5",
        secondary: "#2c2c2c",
        tertiary: "#1E1E1E",
        accent: "#424242",
        hover: "#3E3E3E",
        dropdown: "#151515",
        dropdownBorder: "#2B2B2B",
        dropdownHover: "#2B2B2B",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
