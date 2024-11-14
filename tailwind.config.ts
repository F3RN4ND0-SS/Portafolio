import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#186a3b",
        darkBg: "#7dcea0",
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(34, 197, 94, 0.5) -5.91%, rgba(16, 185, 129, 0.5) 111.58%)",
      },
    },
  },
  plugins: [],
};
export default config;
