/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/* var removeElement = function(nums, val) {
  if(nums.length === 0) {
    return 0;
  }
  let s = 0;
  let e = nums.length - 1;
  while(s <= e) {
    if(nums[s] === val) {
      for(let i = s + 1; i <= e; i++) {
        nums[i - 1] = nums[i]
      }
      e--;
    }else {
      s++;
    }
  }
  return e + 1;
}; */

var removeElement = (nums, val) => {
  let index = 0, last = nums.length - 1
  while (index <= last) {
    if (nums[index] === val) {
      nums[index] = nums[last]
      last--
    } else {
      index++
    }
  }
  return index
}
// @lc code=end

