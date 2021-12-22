const path = require('path')
const HelloWorldPlugin = require('./plugins/HelloWorldPlugin.js')
const HTMLPlugin = require('./plugins/HTMLPlugin.js')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HelloWorldPlugin(),
    // 这个插件需要用正常的webpack来用
    /* new HTMLPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }) */
  ],
  module: {
    rules: [
      // loader执行顺序： 从下到上，从右到左
      /* loader分类：
            配置（即这里写的这种方式）
            内联 import Styles from 'style-loader!css-loader?modules!./styles.css';
            CLI webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
      */
      // loader的加载顺序永远遵循: pre > inline > normal > post
      {
        test: /\.js$/, use: {
          loader: './loaders/loader1.js',
          options: {
            name: '后天2222222'
          }
        },
        enforce: 'pre'
      },
      // { test: /\.js$/, use: './loaders/loader2.js' },
      // { test: /\.js$/, use: './loaders/loader3.js', enforce: 'post' },

      // {
      //   test: /\.js$/,
      //   use: [
      //     './loaders/loader1.js',
      //     './loaders/loader2.js',
      //     './loaders/loader3.js'
      //   ]
      // }
    ]
  },
  mode: 'development',
  devtool: 'none'
}