// 从 Node.js v13.2 版本开始，Node.js 已经默认打开了 ES6 模块支持
import('./import-1.js').then(res => {
  console.log(res);
})