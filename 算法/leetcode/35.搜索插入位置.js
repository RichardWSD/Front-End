/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/* var searchInsert = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === target || nums[i] > target) {
      return i;
    }
  }
  return nums.length;
}; */
// 使用二分查找法
//https://leetcode-cn.com/problems/search-insert-position/solution/js-by-joeyzhouyicheng-4/
/* var searchInsert = function(nums, target) {
  const length = nums.length;
  if (nums[length - 1] < target) {
    return length;
  } else if (length === 0) {
    return 0;
  }
  let left = 0;
  right = length - 1;
  while (left < right) {
    let mid = (left + right) >>> 1;
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right; //while的截至条件是left===right，所以返回left或right都可以
}; */

//https://blog.csdn.net/xiyangwusheng/article/details/109344344
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  while(left <= right){
      mid = (left + right) >>> 1;
      if(nums[mid] == target){
          return mid;
      }else if(nums[mid] < target){
          left = mid + 1;
      }else {
          right = mid - 1;
      }
  }
  return left;
};
// @lc code=end

