/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: 'hsl(246, 80%, 60%)',
          lightOrange: 'hsl(15, 100%, 70%)',
          softBlue: 'hsl(195, 74%, 62%)',
          lightRed: 'hsl(348, 100%, 68%)',
          limeGreen: 'hsl(145, 58%, 55%)',
          violet: 'hsl(264, 64%, 52%)',
          softOrange: 'hsl(43, 84%, 65%)'
        },
        neutral: {
          veryDarkBlue: 'hsl(226, 43%, 10%)',
          darkBlue: 'hsl(235, 46%, 20%)',
          desaturatedBlue: 'hsl(235, 45%, 61%)',
          paleBlue: 'hsl(236, 100%, 87%)'
        }
      },      
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}
