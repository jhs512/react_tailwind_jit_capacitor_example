module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,html}",
  ],
  darkMode: "class", // or 'media' or 'class'
  plugins: [require("daisyui")],
};