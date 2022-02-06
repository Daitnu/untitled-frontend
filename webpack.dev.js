const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');
const robotsOptions = require('./robots-txt.config');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: '[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '@t': path.resolve(__dirname, 'src/@types'),
      '@lib': path.resolve(__dirname, 'src/libraries'),
      '@const': path.resolve(__dirname, 'src/constants'),
      Assets: path.resolve(__dirname, 'assets'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: { ecma: 6, compress: { drop_console: true }, output: { comments: false } },
        parallel: 4,
      }),
    ],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
          'eslint-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
        options: {
          publicPath: '/',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      // {
      //   test: /\.css$/i,
      //   loader: 'css-loader',
      //   options: {
      //     url: true,
      //   },
      // },
    ],
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: 'public/index.html' }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}',
      },
    }),
    new RobotstxtPlugin(robotsOptions),
    new Dotenv({
      path: './.env.development',
    }),
  ],
};
