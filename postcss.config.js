module.exports = {
  plugins: [
    [
      'postcss-preset-env',
      {
        postcssOptions: {
          parser: 'postcss-js',
        },
        execute: true,
      },
    ],
  ],
};
