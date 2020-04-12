const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',  //入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/')
        },
        extensions: [".js", ".vue", ".json"]   // 默认值: [".js",".json"]
    },
    externals: {
        jquery: 'jQuery',
        lodash: '_'
    },
    module: {
        rules: [
            //JS启用babel转码
            {
                test: /\.js$/,
                exclude: /(node_modules)/,  // 加快编译速度，不包含node_modules文件夹内容
                use: [{
                    loader: 'babel-loader',
                    //Babel优化
                    options: {
                        cacheDirectory: true
                    }
                }, {
                    loader: "eslint-loader",
                    options: {
                        // eslint options (if necessary)
                        fix: true
                    }
                }]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg|ico|woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'url-loader', // 根据图片大小，把图片优化成base64
                        options: {
                            limit: 30000
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'AICODER 全栈线下实习', // 默认值：Webpack App
            filename: 'main.html', // 默认值： 'index.html'
            template: path.resolve(__dirname, 'src/main.html'),
            minify: {
                collapseWhitespace: true,   //是否把空白去掉
                removeComments: true,       //是否移除注释
                removeAttributeQuotes: true // 移除属性的引号
            }
        })
    ]
};

/*
  1.webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，
  其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle
  2.loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。
  loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块
  3.loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。
  插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。
 */
