module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        zotacTheme: {
          primary: "#e67e22",
          secondary: "#2c3e50",
          accent: "#192a56",
          neutral: "#f0f8ff",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
