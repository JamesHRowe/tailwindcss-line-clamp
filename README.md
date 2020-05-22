# TailwindCSS Line Clamp

TailwindCSS plugin to generate webkit line clamp utilities.

## Installation

```bash
npm i tailwindcss-line-clamp --save-dev
# or
yarn add tailwindcss-line-clamp -D
```

## Usage

```js
{
  theme: {
    lineClamp: {
      1: 1,
      2: 2,
      3: 3
    }
  },
  plugins: [
    require('tailwindcss-line-clamp')
  ],
}
```

This will generate the following utilities:

```css
.clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
```

## Variants

By default, no variants are generated for these utilities. If you would like them, modify `lineClamp` in the variants section of your `tailwind.config.js` file.

```js
{
  variants: {
    lineClamp: ["responsive"];
  }
}
```

## Browser Support

`-webkit-line-clamp` is not supported in ie11. If you need to accomodate these users you may need to reach for a JS or server-side solution.

Can I use: [-webkit-line-clamp](https://caniuse.com/#feat=css-line-clamp)
