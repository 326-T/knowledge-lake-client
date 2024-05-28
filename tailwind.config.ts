import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // https://m2.material.io/inline-tools/color/
        primary: {
          50: "#e7e9fc",
          100: "#c1c7f7",
          200: "#96a3f2",
          300: "#647fee",
          400: "#3562ea", // primary
          500: "#0045e4",
          600: "#003dd9",
          700: "#0032cd",
          800: "#0027c2",
          900: "#000faa",
        },
        secondary: {
          50: "#fcfce8",
          100: "#f9f7c5",
          200: "#f5f29f",
          300: "#f2ed7a",
          400: "#efe95e",
          500: "#ebe444",
          600: "#ecd43f",
          700: "#eabd35", // secondary
          800: "#e7a62b",
          900: "#e27f1a",
        },
        tertiary: {
          50: "#efe7fc",
          100: "#d4c5f8",
          200: "#b79ef5",
          300: "#9875f2",
          400: "#7f55ee",
          500: "#6235ea", // tertiary
          600: "#5630e3",
          700: "#4228db",
          800: "#2a22d5",
          900: "#0012cc",
        },
        text: "#0F172A",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
