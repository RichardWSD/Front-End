// output中的path需要绝对路径
let path = require('path')
let webpack = require('webpack')
// 用于将打包的js文件注入到html文件中
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].[chunkHash].js',
    chunkFilename: '[name].[chunkHash].js'
  },
  plugins: [
    new CommonsChunkPlugin({
      children: true,
      async: true
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}