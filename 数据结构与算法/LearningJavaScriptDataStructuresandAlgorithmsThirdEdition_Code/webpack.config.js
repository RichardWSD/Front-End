/* eslint-disable */
const path = require("path");

let libraryName = "PacktDataStructuresAlgorithms";

let outputFile = libraryName + ".min.js";

const config = {
  entry: "./src/js/index.js",
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname + "/examples"),
    filename: outputFile,
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    static: {
      // 项目构建后路径
      directory: path.resolve(__dirname, "examples")
    },
    // 启动gzip压缩
    compress: true,
    // 端口号
    port: 3000,
    // 自动打开浏览器
    open: true
  },
  resolve: {
    // modules: [
    //   path.resolve(__dirname, "./node_modules"),
    //   path.resolve(__dirname, "./src/js")
    // ],
    extensions: [".json", ".js"]
  }
  // plugins: plugins
};

module.exports = config;
