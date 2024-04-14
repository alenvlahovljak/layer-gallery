const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv').config();

const cleanWebpack = new CleanWebpackPlugin();
const copyWebpack = new CopyWebpackPlugin({ patterns: [{ from: 'public', to: 'public' }] });
const cssExtractPlugin = new MiniCssExtractPlugin({
  filename: 'static/layer-gallery.css'
});
const webpackDefine = new webpack['DefinePlugin']({
  'process.env': {
    SITE_URL: JSON.stringify(dotenv.parsed['SITE_URL']),
    PUBLIC_URL: JSON.stringify(dotenv.parsed['PUBLIC_URL']),
    API_URL: JSON.stringify(dotenv.parsed['API_URL']),
    API_KEY: JSON.stringify(dotenv.parsed['API_KEY'])
  }
});
const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  publicPath: '/'
});

const cssEntryPoint = path.resolve(__dirname, '../src/styles/global.css');

module.exports = (config) => ({
  entry: './src/index.tsx',
  cache: true,
  mode: config.mode,
  devtool: config.devtool,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        include: [cssEntryPoint],
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(ico|jpg|png|gif|webp)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'media/[name].[hash:8].[ext]',
          publicPath: config.fileLoaderPublicPath
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true
            }
          }
        ]
      }
    ].concat(config.rules)
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      public: path.resolve(__dirname, '../public')
    },
    fallback: {
      process: require.resolve('process/browser')
    }
  },
  output: {
    filename: 'static/layer-gallery.js',
    path: config.path,
    publicPath: config.fileLoaderPublicPath,
    chunkFilename: `[name].[contenthash].js`
  },
  plugins: [cssExtractPlugin, copyWebpack, cleanWebpack, webpackDefine, htmlPlugin].concat(
    config.plugins || []
  ),
  externals: {},
  devServer: config.devServer || {},
  optimization: config.optimization || {}
});
