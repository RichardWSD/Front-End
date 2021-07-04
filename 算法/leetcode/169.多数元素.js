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

// https://leetcode-cn.com/problems/majority-element/solution/yi-ban-by-shetia/
var majorityElement = function(nums) {
  let x = 0
  let m = 0
  for(let n of nums){
    if(m === 0) x = n
    m += x === n ? 1 : -1
  }
  return x
};

// @lc code=end

