/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/* var moveZeroes = function(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if(nums[i] === 0) {
      nums.push(...nums.splice(i, 1))
    }
  }
}; */
// 数组
// 双指针
const moveZeroes = (nums) => {
  const length = nums.length;
  let left = 0;
  let right = 0;
  while (right < length) {
      if (nums[right]) {
          const temp = nums[right];
          nums[right] = nums[left];
          nums[left] = temp;
          left++;
      }
      right++;
  }
};
// @lc code=end

