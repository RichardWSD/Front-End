const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

let prodConfig = {
    mode: 'production',
    //output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件
    output: {
        filename: 'main.[hash].js',
        path: path.resolve(__dirname, './dist')
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
                  mini-css-extract-plugin：样式表抽离成专门的单独文件
                  optimize-css-assets-webpack-plugin：压缩 CSS
                  url-loader：处理图片成 base64
                 */
                //加载器可以链式传递，从右向左进行应用到模块上
                use: [
                    MiniCssExtractPlugin.loader,
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
                            plugins: loader => [autoprefixer({ browsers: ['> 0.15% in CN'] })]
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css', // 设置最终输出的文件名
            chunkFilename: '[id].[hash].css'
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
};

module.exports = merge(common,prodConfig);

/*
  1.webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，
  其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle
  2.loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。
  loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块
  3.loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。
  插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。
 */
