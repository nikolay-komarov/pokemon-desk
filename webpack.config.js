const path = require('path');
const HTMLWebpackPlugins = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  mode: NODE_ENV ? NODE_ENV : 'development',

  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader'],
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugins({
      template: path.resolve(__dirname, 'public/index.html'),
    })
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  devtool: 'source-map',
};
