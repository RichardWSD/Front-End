const path = require("path");
const webpack = require("webpack");
const packagejson = require("./package.json");

// 第一种分离vender和common方式
/* const config = {
    entry: {
        first: './src/first.js',
        second: './src/second.js',
        vendor: Object.keys(packagejson.dependencies)//获取生产环境依赖的库
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: '[name].js'
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor','runtime'],
        filename: '[name].js',
        minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        filename: '[name].js',
        chunks: ['first','second']//从first.js和second.js中抽取commons chunk
    }),
  ]
} */

//第二种分离vendor和common方式
//试过不行
const config = {
  entry: {
      first: './src/first.js',
      second: './src/second.js',
      //vendor: Object.keys(packagejson.dependencies)//获取生产环境依赖的库
  },
  output: {
      path: path.resolve(__dirname,'./dist'),
      filename: '[name].js',
      chunkFilename: "[name].[hash:5].chunk.js"
  },
   plugins: [
      new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          filename: '[name].js',
          minChunks: function (module,count) {
              console.log(module.resource,`引用次数${count}`);
              //"有正在处理文件" + "这个文件是 .js 后缀" + "这个文件是在 node_modules 中"
              return (
                  module.resource &&
                  /\.js$/.test(module.resource) &&
                  module.resource.indexOf(path.join(__dirname, './node_modules')) === 0
              )
          }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        filename: '[name].js',
        chunks: ['first','second']//从first.js和second.js中抽取commons chunk
      }),
      new webpack.optimize.CommonsChunkPlugin({
          name: 'runtime',
          filename: '[name].js',
          chunks: ['vendor']
          // minChunks: Infinity
      }),
      
  ]
}

module.exports = config;