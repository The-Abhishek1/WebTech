import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      //Max-width
      'm2xl': { 'max': '1535px' },
  
      'mxl': { 'max': '1279px' },

      'mlg': { 'max': '1023px' },

      'mmd': { 'max': '767px' },

      'msm': { 'max': '639px' },

       'msmm': { 'max': '450px' },

      //Min width
       
      'smm': { 'min': '450px' },

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {
    
    },
  },
  plugins: [],
};
export default config;
