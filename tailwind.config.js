module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#363795",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#363795",
          "primary-focus": "#2c2d82", // Optional: add focus state color
          "primary-content": "#ffffff", // Optional: text color on primary
          secondary: "#991B1E", // Added secondary color
          // Add other colors here if needed
        },
      },
    ],
  },
}
