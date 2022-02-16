/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/* var majorityElement = function(nums) {
  let obj = {}, len = Math.ceil(nums.length / 2)
  for (const num of nums) {
    const count = obj[num] ? ++obj[num] : obj[num] = 1
    if(count >= len) {
      return num
    }
  }
}; */

// 数组
// 排序
// 方法：投票法
var majorityElement = function(nums) {
  let count = 0
  let candidate
  for(let n of nums){
    if(count === 0) candidate = n
    count += candidate === n ? 1 : -1
  }
  return candidate
};

// @lc code=end

