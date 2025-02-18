/** @type {import('tailwindcss').Config} */
export default {
  content: [  
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        bg:'#D6EFD8',
        primary: {
          "100": "#80AF81", // Light green, perfect for backgrounds, hover effects, or light card sections
          DEFAULT: "#20591E", // Main primary color, good for buttons, links, and accents
        },
        secondary: "#508D4E", // Muted green, ideal for secondary buttons, icons, or call-to-action elements
        black: {
          "100": "#333333", // Dark gray, used for primary text on light backgrounds
          "200": "#141413", // Almost black, great for deep contrast backgrounds or text
          "300": "#7D8087", // Muted gray, perfect for secondary text or borders
          DEFAULT: "#000000", // Pure black, commonly used for headers, major text contrast
        },
        white: {
          "100": "#F7F7F7", // Off-white, can be used for background elements or cards for subtle contrast
          DEFAULT: "#FFFFFF", // Pure white, perfect for clean backgrounds, text contrast
        },
      }
      ,
      
      boxShadow: {
        100: "2px 2px 0px 0px rgba(214, 239, 216, 0.5)", // Light green shadow, used for subtle effects
        200: "2px 2px 0px 2px rgba(128, 175, 129, 0.5)", // Muted olive shadow, for soft highlights
        300: "2px 2px 0px 2px rgba(32, 89, 30, 1)", // Deep green shadow, same as the border color, for strong emphasis
      },
      
      }
    
    },
  
  plugins: [],
}

