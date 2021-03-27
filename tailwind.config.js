module.exports = {
  // purge: [],
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      custom: "gold",
      sidebar: "lime",
      red: "#FA2544",
      white: "#FFF",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
