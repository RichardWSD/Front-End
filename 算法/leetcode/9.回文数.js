/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

const {
  Math
} = require("core-js");

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
//  https://leetcode-cn.com/problems/palindrome-number/solution/ji-jian-jie-fa-by-ijzqardmbd-2/
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;
  let n = 10 ** Math.floor(Math.log10(x));
  while (n > 1 && x > 0) {
    if (Math.floor(x / n) !== x % 10) return false;
    x = Math.floor((x % n) / 10);
    n /= 100;
  }
  return true;
};
// @lc code=end