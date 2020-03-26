const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin")
  .default;
const HTMLInlineWebpackPlugin = require("html-webpack-inline-source-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      inlineSource: ".(js|css)$",
    }),
    new HTMLInlineCSSWebpackPlugin(),
    new HTMLInlineWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer:
    process.env.NODE_ENV === "development"
      ? {
        contentBase: "./dist",
        hot: true,
      }
      : undefined,
};
