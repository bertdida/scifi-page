import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      orange: "#ff632c",
      white: "#ffffff",
      blue: "#0083fe",
    },
    fontFamily: {
      druk: ["Druk Wide Bold", "sans"],
    },
  },
  plugins: [],
};
export default config;
