/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 数组
// 动态规划
var maxProfit = function(prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  for(let p of prices) {
    if(min > p) {
      min = p;
    }else if(p - min > max) {
      max = p - min;
    }
  }
  return max;
};
// @lc code=end

