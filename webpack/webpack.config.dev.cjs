'use strict';

const webpack = require('webpack');
const path = require('path');

const baseWebpackConfig = require('./webpack.config');

const webpackDefine = new webpack['DefinePlugin']({
  'process.env.NODE_ENV': JSON.stringify('development')
});

const PORT = 3000;

const devConfig = () =>
  baseWebpackConfig({
    mode: 'development',
    stats: 'errors-only',
    devtool: 'eval-source-map',
    path: path.resolve(__dirname, '../dist'),
    fileLoaderPublicPath: 'auto',
    rules: [],
    plugins: [webpackDefine],
    devServer: {
      allowedHosts: 'all',
      historyApiFallback: true,
      port: PORT,
      open: false,
      hot: false,
      liveReload: true,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      static: {
        directory: path.resolve(__dirname, '../dist')
      },
      proxy: {
        '/api': {
          target: process.env.API_URL,
          pathRewrite: { '^/api': '' },
          changeOrigin: true
        }
      },
      devMiddleware: {
        stats: 'errors-only'
      }
    },
    optimization: {
      runtimeChunk: false,
      splitChunks: false
    }
  });

module.exports = devConfig();
