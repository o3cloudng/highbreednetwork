import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:         "#1a6fd4",
          "blue-light":  "#3d8fe8",
          "blue-dark":   "#1456a8",
          green:         "#3a9a3a",
          "green-light": "#4dbf4d",
          "green-dark":  "#2d7a2d",
          white:         "#ffffff",
          "off-white":   "#f5f7fa",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
