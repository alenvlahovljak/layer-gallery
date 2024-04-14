'use strict';

const path = require('path');

const baseWebpackConfig = require('./webpack.config');

const prodConfig = () =>
  baseWebpackConfig({
    mode: 'production',
    devtool: false,
    path: path.resolve(__dirname, '../dist'),
    fileLoaderPublicPath: 'auto',
    rules: [],
    plugins: [],
    optimization: {
      minimize: true,
      nodeEnv: 'production',
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    },
    performance: {
      hints: 'error',
      maxAssetSize: 512000,
      maxEntrypointSize: 512000
    }
  });

module.exports = prodConfig();
