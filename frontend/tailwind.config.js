/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'typing': 'typing 10s steps(30) 1s forwards infinite', 
        
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '60%': { width: '66%' },
          
        },
        
      },
    },
  },
  plugins: [],
};
