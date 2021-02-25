module.exports = {
  presets: [
    [
      'babel-preset-gatsby',
      {
        targets: {
          browsers: ['>0.25%', 'not dead'],
        },
        useBuiltIns: 'usage',
      },
    ],
    [
      '@linaria',
      {
        evaluate: true,
        displayName: process.env.NODE_ENV !== 'production',
      },
    ],
  ],
};
