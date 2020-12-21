const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const path = require('path');

const devConfig = {
  mode: 'development',
  resolve: {
    alias: {
      root: path.resolve(__dirname, '../app/client')
    }
  }
};

module.exports = merge(baseConfig, devConfig);
