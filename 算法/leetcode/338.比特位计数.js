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
//  https://leetcode-cn.com/problems/counting-bits/solution/bi-te-wei-ji-shu-by-leetcode-solution-0t1i/
 var countBits = function(n) {
  const bits = new Array(n + 1).fill(0);
  let highBit = 0;
  for (let i = 1; i <= n; i++) {
      if ((i & (i - 1)) == 0) {
          highBit = i;
      }
      bits[i] = bits[i - highBit] + 1;
  }
  return bits;
};
// @lc code=end

