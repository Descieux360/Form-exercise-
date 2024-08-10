/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**{html,js}"],
  theme: {
    screens: {
      'sm': {'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '1390px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'project-background':'hsl(148, 38%, 91%)',
        'submit':'hsl(169, 82%, 27%)',
        'notify':'hsl(169, 82%, 27%)',
        'red':'hsl(0, 66%, 54%)',
      },
    },
  },
  plugins: [],
}

