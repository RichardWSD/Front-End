/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let xor = x ^ y
  let ret = 0
  while(xor !== 0) {
    // 记 f(x) 表示 x 和 x-1 进行与运算所得的结果（即 f(x)=x & (x−1)），
    // 那么 f(x) 恰为 x 删去其二进制表示中最右侧的 1 的结果
    xor &= xor - 1
    ret++
  }
  return ret
};
// @lc code=end

