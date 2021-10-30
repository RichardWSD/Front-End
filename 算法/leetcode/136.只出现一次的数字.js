/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 数组
var singleNumber = function(nums) {
  return nums.reduce((res, cur) => res ^ cur)
};
// @lc code=end

