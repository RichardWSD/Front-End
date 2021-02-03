/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 这种可以，但是运行太慢，判错了
/* var climbStairs = function(n) {
  let result = 0;
  function dfs(len, res) {
    if(len >= n) {
      if(len === n) {
        result++;
      }
      return;
    }

    for(let i = 1; i < 3; i++) {
      let l = len + i;
      res.push(i);
      dfs(l, res);
      res.pop(i);
    }
  }
  dfs(0, []);
  console.log(result);
  return result;
}; */

/* 
  动态规划
  本问题其实常规解法可以分成多个子问题，爬第n阶楼梯的方法数量，等于 2 部分之和
  1.爬上 n-1n−1 阶楼梯的方法数量。因为再爬1阶就能到第n阶  
  2.爬上 n-2n−2 阶楼梯的方法数量，因为再爬2阶就能到第n阶
*/
var climbStairs = function(n) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for(let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
// @lc code=end

