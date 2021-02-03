/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/* var removeDuplicates = function(nums) {
  let len = nums.length - 1;
   for(let i = len; i > 0; i--) {
    let cur = nums[i];
    let pre = nums[i - 1];
    if(cur === pre) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
}; */

var removeDuplicates = function (nums) {
  // 慢指针初始为0;
  let k = 0;
  // 循环中的变量i是快指针
  for (let i = 0; i < nums.length; i++) {
    // 如果 快慢指针指向的元素不同
    if(nums[i] !== nums[k]) {
      // 慢指针++; 快指针是 循环变量每次都会自增，不需要单独操作
      k++;
      // 将快指针 指向的元素覆盖慢指针当前的元素
      nums[k] = nums[i]
    }
  }
  return k+1;
};
// @lc code=end

