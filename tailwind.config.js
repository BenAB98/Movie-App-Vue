/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container : {
      center :true,
    },
    extend: {
      colors:{
        background:"#12191F",
        grayLight:"#84878D",
        grayWhite:"#BEC1C8",
        ogangeLink:"#FFAA3C",
        keywords:"#0000001A"
      },
    },
  },
  plugins: [],
}