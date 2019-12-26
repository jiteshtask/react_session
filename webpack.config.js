const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path')

module.exports = {
  entry: ["babel-polyfill", "react-hot-loader/patch", "./src/index.jsx"],
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  output: {
    path: path.join(__dirname + "/dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("dev")
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({
      title: "React Session",
      inject: true
    }), 
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
    historyApiFallback: true,
    inline: true,
    port: 8080
  }
};