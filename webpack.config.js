const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./src/js/main.js",
    output: {
      filename: isProduction ? "main.[contenthash].js" : "main.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html",
        minify: isProduction
          ? {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
            }
          : false,
      }),
    ],
    optimization: {
      minimize: isProduction,
      usedExports: true,
      sideEffects: false,
    },
    devtool: isProduction ? false : "source-map",
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      port: 8080,
      open: true,
      hot: true,
      compress: true,
    },
  };
};
