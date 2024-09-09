import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#BE0000',
        'dynamic-red': '#E94F4F',
        'hover-red': '#FF4C4C',
        'highlight-white': '#F2F2F2',
        'dark-bg': '#0D0D0D',
        'secondary-bg': '#1E1E1E',
        'light-text': '#E0E0E0',
        'medium-text': '#B0B0B0',
      },
      fontFamily: {
        sans: ['var(--font-raleway)', 'var(--font-roboto)'],
        raleway: 'var(--font-raleway)',
        roboto: 'var(--font-roboto)',
      },
    },
  },
  darkMode: "class",
  // plugins: [
  //   nextui({
  //     themes: {
  //       dark: {
  //         colors: {
  //           backgroundColor: '#0D0D0D',
  //           foreground: '#E0E0E0',
  //           primary: {
  //             100: "#FBDAC9",
  //             200: "#F8AE95",
  //             300: "#EB765E",
  //             400: "#D84436",
  //             500: "#BE0000",
  //             600: "#A3000E",
  //             700: "#880017",
  //             800: "#6E001C",
  //             900: "#5B001F",
  //             DEFAULT: "#BE0000",
  //             foreground: "#E0E0E0",
  //           }
  //         },
  //       }
  //     }
  //   })
  // ],
  plugins: [],
};
