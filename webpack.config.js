const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

function resolve(params) {
  return path.resolve(__dirname, params);
}

module.exports = {
  mode: 'development',
  entry: {
    index: resolve("src/index.js")
  },
  output: {
    filename: "[name].js",
    path: resolve("dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: "file-loader",
      },
    ],
  },
  resolve: {
    alias: {
      "@": resolve("src"),
      "vue": "vue/dist/vue.js"
    },
    extensions: [".js"],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: resolve("./public/index.html"),
      favicon: resolve("./public/favicon.ico"),
    })
  ],
  devServer: {
    port: 8090,
  },
};