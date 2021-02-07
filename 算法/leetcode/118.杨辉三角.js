/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let rows = []
  for(let i = 1; i <= numRows; i++) {
    let row = []
    for(let j = 0; j < i; j++) {
      if(j === 0 || j === i - 1) {
        row.push(1);
      }else {
        row.push(rows[i-2][j-1] + rows[i-2][j]);
      }
    }
    rows.push(row)
  }
  return rows;
};
generate(5)
// @lc code=end

