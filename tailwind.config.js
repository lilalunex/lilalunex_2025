/** @type {import("tailwindcss").Config} */

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // All files in the app directory
    "./app/**/**/*.{js,jsx,ts,tsx}", // Double check for nested files
    "./app/**/**/**/*.{js,jsx,ts,tsx}", // Triple check for deeply nested files
  ],
  theme: {
    extend: {
      colors: {
        "warm-beige": "#f0dfd2", // Noch heller und lebendiger
        "soft-cream": "#fff6e8", // Strahlendes Cremeweiß
        "muted-sand": "#eac08d", // Wärmerer Sandton
        "golden-tan": "#d39b6d", // Kräftigerer Goldton mit mehr Wärme
        "earthy-brown": "#704a3b", // Tiefer und reichhaltiger
        "deeper-brown": "#a0663f", // Satter und wärmer
        "light-fleshy-pink": "#f8c7bd", // Strahlender, rosigerer Farbton
        "muted-blood-red": "#ec8989", // Intensiverer und lebhafterer Rotton
        "dusky-pink": "#eb90c9", // Lebendiger Pinkton
        "soft-gold": "#ffdba0", // Noch strahlender und goldener
        "lotus-border": "#8f7565" // Kontrastreicher und kräftiger
      },      
      spacing: {
        "nav-height": "76px",
        "nav-ul-height": "56px",
        "border-left-right": "9px",
        "border-bottom-width": "3px",
        "21": "5.25rem",
        "26": "6.5rem",
        "28": "7rem",
        "30": "7.5rem",
      },
      rotate: {
        "6": "6deg",
      },
      borderWidth: {
        // "12": "12px",
        "16": "16px",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        ".min-h-screen-hero": {
          minHeight: `calc(100vh - ${theme("spacing.nav-height")})`,
        },
        ".btn": {
          color: theme("colors.deeper-brown"),
          borderColor: theme("colors.deeper-brown"),
          backgroundColor: theme("colors.muted-sand"),
          display: "block",
          textAlign: "center",
          width: "260px",
          // 'margin-left': "120px"
        },
        ".btn:hover": {
          backgroundColor: theme("colors.soft-cream"),
          color: theme("colors.earthy-brown"),
        }
      });
    },
  ],
};
