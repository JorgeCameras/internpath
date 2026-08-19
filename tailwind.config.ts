import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F6F4EF",
        ink: "#161A22",
        path: {
          DEFAULT: "#4A3AFF",
          dark: "#372BCC",
          light: "#E7E4FF",
        },
        signal: "#FF8A3D",
        line: "#DEDAD0",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
