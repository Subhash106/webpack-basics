const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
    another: "./src/another-module.js"
  },
  // entry: {
  //   index: {
  //     import: "./src/index.js",
  //     dependOn: "shared"
  //   },
  //   print: {
  //     import: "./src/print.js",
  //     dependOn: "shared"
  //   },
  //   another: {
  //     import: "./src/another-module.js",
  //     dependOn: "shared"
  //   },
  //   shared: "lodash"
  // },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/i,
        type: "asset/resource"
      }
    ]
  }
};
