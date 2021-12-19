const loaderUtils = require('loader-utils')

// 其实loader 就是一个函数
// 使用loader1  将js文件中所有的今天 替换成 明天
let time = 1
module.exports = function(source) {
  // this.query已废弃，最新的api是使用loaderUtils.getOptions方法来获取
  // console.log('我是loader1', this.query)
  // loader处理完后需要把处理的结果返回
  // return source.replace(/今天/g, this.query.name)
  // let options = loaderUtils.getOptions(this)
  // console.log('我是loader1', this.query)
  // return source.replace(/今天/g, options.name || '明天')
  // return source.replace(/今天/g, '昨天')
  console.log('我是loader1');
  if(source.includes('message') && time === 1) {
    time++;
    // vue-loader原理：当动态修改了导入内容，这个动态导入的文件会被loader重新执行一遍，但前提是要有query或者请求没被缓存的文件
    source = `
    let message1 = require('./message.js?ab=1');
    ${source}`
  }
  return source.replace(/今天/g, this.query.name || '昨天')
}