/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/* var maxSubArray = function(nums) {
  let max = nums[0];
  let index = 0;
  while(index < nums.length) {
    let sum = 0;
    for(let i = index; i < nums.length; i++) {
      sum += nums[i];
      if(sum > max) {
        max = sum;
      }
    }
    index++;
  }
  return max;
}; */

/* var maxSubArray = function(nums) {
  let ans = nums[0];
  let sum = 0;
  for(const num of nums) {
      if(sum > 0) {
          sum += num;
      } else {
          sum = num;
      }
      ans = Math.max(ans, sum);
  }
  return ans;
}; */
// 数组
// 动态规划
var maxSubArray = function(nums) {
  let pre = 0, maxAns = nums[0];
  nums.forEach((x) => {
    // 如果前边累加后还不如自己本身大，那就把前边的都扔掉，从此自己本身重新开始累加。
      pre = Math.max(pre + x, x);
      maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};
// @lc code=end

