/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
/* var hammingWeight = function(n) {
  let count = 0
  for(let i = 0; i < 32; i++) {
    count += n & 1
    n >>>= 1
  }
  return count
}; */

/* 
  优化：
   原理：n & (n−1)，其运算结果恰为把 n 的二进制位中的最低位的 1 变为 0 之后的结果
   因为每次运算会使得 n 的最低位的 1 被翻转，因此运算次数就等于 n 的二进制位中 1 的个数

*/
var hammingWeight = function(n) {
  let ret = 0;
  while (n) {
      n &= n - 1;
      ret++;
  }
  return ret;
}
// @lc code=end

