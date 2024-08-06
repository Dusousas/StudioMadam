import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Marcellus: ['Marcellus', 'serif'],
      },
      colors: {
        primary: '#c17688',
        primary2: '#5E0826', //TEXTOS
        second: '#f3f0eb',

      },
      screens: {
        'customSc': '1349px',

      },
    },
  },
  plugins: [],
};
export default config;


