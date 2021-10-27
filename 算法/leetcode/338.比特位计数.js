/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
// 动态规划
// 动态规划——最高有效位
/* var countBits = function(n) {
  const bits = new Array(n + 1).fill(0);
  let highBit = 0;
  for (let i = 1; i <= n; i++) {
      if ((i & (i - 1)) == 0) {
          highBit = i;
      }
      bits[i] = bits[i - highBit] + 1;
  }
  return bits;
}; */

// 动态规划——最低有效位
/* var countBits = function(n) {
  const bits = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
      bits[i] = bits[i >> 1] + (i & 1);
  }
  return bits;
}; */

// 动态规划——最低设置位
var countBits = function(n) {
  const bits = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
      bits[i] = bits[i & (i - 1)] + 1;
  }
  return bits;
};

// @lc code=end

