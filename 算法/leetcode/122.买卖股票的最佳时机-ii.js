/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buy = prices[0];
  let profit = 0;
  for(let i = 1; i < prices.length; i++) {
    if(prices[i] < prices[i - 1]) {
      if(prices[i - 1] > buy) {
        profit += prices[i - 1] - buy;
      }
      buy = prices[i];
    }else if(i === prices.length - 1 && prices[prices.length - 1] > buy) {
      profit += prices[i] - buy;
    }
  }
  return profit;
};

maxProfit([6,1,3,2,4,7])
// @lc code=end

