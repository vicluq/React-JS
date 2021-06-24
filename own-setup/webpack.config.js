const webpack = require("webpack");
const path = require("path");
const autoprefixer = require("autoprefixer");
const HTMLWpPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "bundle.js",
    publicPath: "",
  },
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new HTMLWpPlugin({
      template: __dirname + "/src/index.html",
      inject: "body",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: "babel-loader" }],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: { localIdentName: "[name]_[local]_[hash:base64:5]" },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [autoprefixer()],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [{ loader: "url-loader?limit=8000&name=images/[name].[ext]" }],
        exclude: /node_modules/,
      },
    ],
  },
};
