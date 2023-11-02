/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors:{  'portfolio-primary': {
      '50': '#f7f7f7',
      '100': '#e3e3e3',
      '200': '#c8c8c8',
      '300': '#a4a4a4',
      '400': '#818181',
      '500': '#666666',
      '600': '#515151',
      '700': '#434343',
      '800': '#383838',
      '900': '#313131',
      '950': '#1e1e1e',
  },

  'portfolio-secundary': {
    '50': '#f0f5fe',
    '100': '#dce7fd',
    '200': '#c1d5fc',
    '300': '#97bcf9',
    '400': '#6699f4',
    '500': '#4274ef',
    '600': '#2851e3',
    '700': '#2441d1',
    '800': '#2336aa',
    '900': '#223386',
    '950': '#192152',
},}
    
  
    },
  },
  plugins: [],
}

