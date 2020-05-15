const _ = require("lodash");
const plugin = require("tailwindcss/plugin");
// const getLogger = require("webpack-log");
// const log = getLogger({ name: "line-clamp" });

module.exports = plugin(
  function lineClamp({ addUtilities, theme, e, variants }) {
    const utilities = _.map(theme("lineClamp"), (value, key) => {
      return {
        [`.${e(`clamp-${key}`)}`]: {
          overflow: "hidden",
          display: "-webkit-box",
          "-webkit-line-clamp": `${value}`,
          "-webkit-box-orient": "vertical",
        },
      };
    });

    addUtilities(utilities, variants("lineClamp", []));
  },
  {
    theme: {
      lineClamp: {
        "1": 1,
        "2": 2,
        "3": 3,
      },
    },
  }
);
