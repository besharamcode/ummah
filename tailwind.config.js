/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        signika: ["Signika", "cursive"],
        Rampart: ["Rampart One", "cursive"],
      },
      spacing: {
        0.5: "2px",
      },
      backgroundImage: {},
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#192638",
          secondary: "#c8e0f5",
          accent: "#192638",
          neutral: "#1b1b1b",
          "base-100": "#d6e8f5",
          info: "#8bab00",
          success: "#8bab00",
          warning: "#bf2c00",
          error: "#d71130",

          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": ".25s",
          "--animation-input": ".2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
      },
      {
        dark: {
          primary: "#d6e8f5",
          secondary: "#c8e0f5",
          accent: "#192638",
          neutral: "#1b1b1b",
          "base-100": "#192638",
          info: "#8bab00",
          success: "#8bab00",
          warning: "#bf2c00",
          error: "#d71130",

          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": ".25s",
          "--animation-input": ".2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
