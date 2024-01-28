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
        primary: "#4D87A0",
        secondary: "#282C33",
        thirdinary: "#ABB2BF",
      },
      backgroundImage: {
        bgProjects: "url('/images/bgProjects.png')",
        bgSkills: "url('/images/bgSkills.svg')",
        bgAboutMeDots: "url('/images/aboutMeDots.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
