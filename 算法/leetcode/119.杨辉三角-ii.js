/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(k) {
  if(k === 0) {
    return [1];
  }
  let list = [1];
  for(let i = 0; i < k; i++) {
    list.unshift(0);
    for(let j = 0; j < i + 1; j++) {
      list[j] = list[j] + list[j + 1];
    }
  }
  return list;
};

getRow(3);
// @lc code=end

