/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

const { sinh } = require("core-js/fn/number");

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
/* var reverse = function(x) {
  let xStr = `${x}`;
  let sign;
  if(/[-|+]/.test(xStr[0])){
    sign = xStr[0];
    xStr = xStr.slice(1);
  }

  let num = xStr.split('').reverse().join('');
  if(sign){
    num = `${sign}${num}`
  }
  num = +num;
  if(num < -Math.pow(2, 31) || num > Math.pow(2, 31) - 1){
    num = 0;
  }
  return num;
}; */

var reverse = function(x) {
  let result = 0;
  while(x !== 0) {
      result = result * 10 + x % 10;
      x = (x / 10) | 0;
  }
  return (result | 0) === result ? result : 0;
};
// @lc code=end

