const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let devConfig = {
  mode: 'development',
  //output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    clientLogLevel: 'warning', // 可能的值有 none, error, warning 或者 info（默认值)
    hot: true,  // 启用 webpack 的模块热替换特性, 这个需要配合： webpack.HotModuleReplacementPlugin插件
    contentBase:  path.join(__dirname, "dist"), // 告诉服务器从哪里提供内容， 默认情况下，将使用当前工作目录作为提供内容的目录
    compress: true, // 一切服务都启用gzip 压缩
    //host: '0.0.0.0', // 指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问 0.0.0.0
    port: 58080, // 端口
    open: true, // 是否打开浏览器
    overlay: {  // 出现错误或者警告的时候，是否覆盖页面线上错误消息。
      warnings: true,
      errors: true
    },
    publicPath: '/', // 此路径下的打包文件可在浏览器中访问。
    proxy: {  // 设置代理
      "/api": {  // 访问api开头的请求，会跳转到  下面的target配置
        target: "http://192.168.0.102:8080",
        pathRewrite: {"^/api" : "/mockjsdata/5/api"}
      }
    },
    quiet: true, // necessary for FriendlyErrorsPlugin. 启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自 webpack 的错误或警告在控制台不可见。
    watchOptions: { // 监视文件相关的控制选项
      poll: true,   // webpack 使用文件系统(file system)获取文件改动的通知。在某些情况下，不会正常工作。例如，当使用 Network File System (NFS) 时。Vagrant 也有很多问题。在这些情况下，请使用轮询. poll: true。当然 poll也可以设置成毫秒数，比如：  poll: 1000
      ignored: /node_modules/, // 忽略监控的文件夹，正则
      aggregateTimeout: 300 // 默认值，当第一个文件更改，会在重新构建前增加延迟
    }
  },
  module: {
    rules: [
      {
        test: /\.(sc|c|sa)ss$/,
        /*
          css-loader： 辅助解析 js 中的 import './main.css'
          style-loader: 把 js 中引入的 css 内容 注入到 html 标签中，并添加 style 标签.依赖 css-loader
          加载 Sass 需要sass-loader
          PostCSS是一个 CSS 的预处理工具，可以帮助我们：给 CSS3 的属性添加前缀，样式格式校验（stylelint），提前使用 css 的新特性
              生产模式下使用：
                mini-css-extract-plugin：样式表抽离成专门的单独文件
                optimize-css-assets-webpack-plugin：压缩 CSS
                uglifyjs-webpack-plugin：JS 压缩
                html-webpack-plugin：解决 CSS 文件或者 JS 文件名字哈希变化的问题
                clean-webpack-plugin：每次构建前清理 /dist 文件夹
                加载图片：file-loader
                图片优化：image-webpack-loader
              开发模式下使用：
              使用 webpack-dev-server 和热更新
         */
        //加载器可以链式传递，从右向左进行应用到模块上
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: loader => [
                require('autoprefixer')({ browsers: ['> 0.15% in CN'] }) // 添加前缀
              ]
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),  // 更容易查看(patch)的依赖
    new webpack.HotModuleReplacementPlugin(),  // 替换插件
    new BundleAnalyzerPlugin()
  ]
};

module.exports = merge(common,devConfig);

/*
  1.webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，
  其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle
  2.loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。
  loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块
  3.loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。
  插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。
 */
