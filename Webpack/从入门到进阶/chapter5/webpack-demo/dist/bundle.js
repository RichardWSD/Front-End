(function (modules) { // webpackBootstrap
  // The module cache
  var installedModules = {};

  // The require function
  // 使用ejs来编写模板，装vscode插件之后就有语法提示
  function __webpack_require__(moduleId) {

    // Check if module is in cache
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    // Create a new module (and put it into the cache)
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };

    // Execute the module function
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    // Flag the module as loaded
    module.l = true;

    // Return the exports of the module
    return module.exports;
  }

  // Load entry module and return exports
  return __webpack_require__(__webpack_require__.s = "./src/index.js");
})
  ({
    
      "./src/index.js":
      (function (module, exports, __webpack_require__) {
        eval(`let news = __webpack_require__("./src/news.js");

console.log(news.content); // require('./index.css')`);
      }),
    
      "./src/news.js":
      (function (module, exports, __webpack_require__) {
        eval(`let message = __webpack_require__("./src/message.js");

module.exports = {
  content: '后天2222222有个大新闻,爆炸消息!!!内容是:' + message.content
};`);
      }),
    
      "./src/message.js":
      (function (module, exports, __webpack_require__) {
        eval(`module.exports = {
  content: '后天2222222要下雨了!!!'
};`);
      }),
    
  });