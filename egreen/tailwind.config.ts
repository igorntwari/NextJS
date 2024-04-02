import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "Manrope-Regular": "Manrope-Regular",
        "Manrope-bold": "Manrope-bold",
        "Manrope-extralight": "Manrope-ExtraLight",
        "Manrope-light": "Manrope-light",
        "Manrope-medium": "Manrope-medium",
        "Manrope-semiBold": "Manrope-semiBold",
        "Manrope-extraBold": "Manrope-extraBold",
        "Roger-main": "Roger-main",
      },
    },
  },
  plugins: [],
};
export default config;
