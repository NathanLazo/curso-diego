const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*{html,js,jsx}'],
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/containers/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      },
    },
  },
  plugins: [
    // ...
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp'),
  ],
};
