/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#100F0F",
      primary: {
        200: "#efeffc",
        300: "#cfd0f6",
        400: "#FF3170",
        DEFAULT: "#FF1069",
        600: "#E91455",
      },
      secondary: {
        200: "#eaf8f4",
        300: "#a3daff",
        400: "#4ab7ff",
        DEFAULT: "#139cf7",
        600: "#0284FC",
      },
      gray: {
        300: "#fafafa",
        400: "#f2f2f2",
        500: "#e5e5e5",
        600: "#b2b2b2",
        700: "#808080",
        800: "#333333",
        DEFAULT: "#1d1d1d",
      },
      dark: {
        primary: "#FF1CAC",
        secondary: "#45ADFF",
        gray: "#212020",
      },
      alert: {
        danger: "#FF4E4E",
        success: "#16BF16",
        warning: "#FEB72F",
      },
    },

    fontSize: {
      "8xl": [
        "70px",
        {
          letterSpacing: "-5px",
          fontWeight: "500",
        },
      ],
      "7xl": [
        "50px",
        {
          letterSpacing: "-2px",
          fontWeight: "600",
        },
      ],
      "6xl": [
        "40px",
        {
          letterSpacing: "-2px",
          fontWeight: "500",
        },
      ],
      "5xl": [
        "35px",
        {
          letterSpacing: "-1.600000023841858px",
          fontWeight: "500",
        },
      ],
      "4xl": [
        "30px",
        {
          letterSpacing: "-0.5px",
          fontWeight: "500",
        },
      ],
      "3xl": [
        "25px",
        {
          letterSpacing: "-0.800000011920929px",
          fontWeight: "500",
        },
      ],
      "2xl": [
        "23px",
        {
          letterSpacing: "-1px",
          fontWeight: "400",
        },
      ],
      xl: [
        "22px",
        {
          letterSpacing: "-1px",
          fontWeight: "400",
        },
      ],
      lg: [
        "21px",
        {
          letterSpacing: "-0.800000011920929px",
          fontWeight: "400",
        },
      ],
      base: [
        "20px",
        {
          letterSpacing: "-0.699999988079071px",
          fontWeight: "400",
        },
      ],
      sm: [
        "19px",
        {
          letterSpacing: "-0.6000000238418579px",
          fontWeight: "400",
        },
      ],
      caption1: [
        "18px",
        {
          letterSpacing: "-0.6000000238418579px",
          fontWeight: "400",
        },
      ],
      caption2: [
        "17px",
        {
          letterSpacing: "-0.30000001192092896px",
          fontWeight: "400",
        },
      ],
      caption3: [
        "16px",
        {
          letterSpacing: "-0.5px",
          fontWeight: "400",
        },
      ],
      caption4: [
        "14px",
        {
          letterSpacing: "-0.20000000298023224px",
          fontWeight: "400",
        },
      ],
    },

    borderRadius: {
      DEFAULT: "10px",
      full: "50%",
    },

    extend: {
      boxShadow: {
        "3xl": "0 0 30px #FF1CAC",
        "4xl": "0 0 30px #333333",
        "5xl": "0 0 25px #45ADFF",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}

