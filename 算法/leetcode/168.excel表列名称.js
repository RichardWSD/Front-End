/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  const sb = [];
  while (columnNumber !== 0) {
      columnNumber--;
      sb.push(String.fromCharCode(columnNumber % 26 + 'A'.charCodeAt()));
      columnNumber = Math.floor(columnNumber / 26);
  }
  return sb.reverse().join('');
};
// @lc code=end

