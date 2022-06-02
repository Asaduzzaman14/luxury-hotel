module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00486c",
          secondary: "#b58e3e",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      // "dark",
      "cupcake",
    ],
  },

  plugins: [require("daisyui")],
}