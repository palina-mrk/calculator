const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./js/script.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
      modulesDirectories: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
    loaders: [
      {
          test: /\.js/,
          loader: 'babel',
          exclude: /(node_modules|bower_components)/
      },
      {
          test: /\.css$/,
          loader: 'style!css'
      }
    ]
  },
  resolve: {
      modulesDirectories: ['node_modules']
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new ExtractTextPlugin('bundle.css'),
  ],
};