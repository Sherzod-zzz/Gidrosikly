const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    colors: {
      "title-color": "#2F3035",
      "gray": "#F0F0F4",
      "primary": "#1C62CD"
    },

    extend: {
    },
  },
  plugins: [],
});

