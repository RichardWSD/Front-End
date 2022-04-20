/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let res = 0
  for(let i = columnTitle.length - 1; i >= 0; i--) {
    res += 26**(columnTitle.length - 1 - i) * (columnTitle[i].charCodeAt() - 64)
  }
  return res
};

// @lc code=end

