/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ff5722',    // Primary color
          secondary: '#4caf50',  // Secondary color
          accent: '#9c27b0',     // Accent color
          neutral: '#3d3d3d',    // Neutral color
          'base-100': '#ffffff', // Base color
        },
      },
      
      'cupcake',
      // Include other themes or remove as needed
    ],
  },
}