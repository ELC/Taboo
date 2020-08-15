const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap(([options]) => [Object.assign(options, {
        template: path.resolve('index.html'),
      })]);
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://elc.github.io/tabubiblico/'
    : '/'
};
