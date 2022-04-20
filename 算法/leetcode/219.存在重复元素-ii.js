/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const map = {}
  for(let i = 0; i < nums.length; i++) {
    const oldIdx = map[nums[i]]
    if(oldIdx !== undefined && (i - oldIdx) <= k) {
      return true
    } 
    map[nums[i]] = i
  }
  return false
};

containsNearbyDuplicate([1,2,3,1], 3)
// @lc code=end

