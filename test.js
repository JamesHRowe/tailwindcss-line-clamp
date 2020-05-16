const _ = require("lodash");
const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const lineClampPlugin = require("./index.js");
const cssMatcher = require("jest-matcher-css");

expect.extend({
  toMatchCss: cssMatcher,
});

const generatePluginCss = (config) => {
  return postcss(
    tailwindcss(
      _.merge(
        {
          corePlugins: false,
          plugins: [lineClampPlugin],
        },
        config
      )
    )
  )
    .process("@tailwind utilities", {
      from: undefined,
    })
    .then((result) => {
      return result.css;
    });
};

test("utility can be customised", () => {
  return generatePluginCss({
    theme: {
      lineClamp: {
        "1": 1,
      },
    },
  }).then((css) => {
    expect(css).toMatchCss(`
      .clamp-1 {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    `);
  });
});

test("variants can be customized", () => {
  return generatePluginCss({
    theme: {
      lineClamp: {
        "6": 6,
      },
    },
    variants: {
      lineClamp: ["hover"],
    },
  }).then((css) => {
    expect(css).toMatchCss(`
    .clamp-6 {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical
    }

    .hover\\:clamp-6:hover {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical
    }
    `);
  });
});
