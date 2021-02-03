/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 控制台打出来看是对的，但是不知道为什么leetcode判错
// 但是答案做法更优
/* var merge = function(nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  nums1 = nums1.slice(0, m);
  while(p2 < n) {
    if(nums1[p1] >= nums2[p2]) {
      nums1.splice(p1, 0, nums2[p2]);
      p2++;
    }
    if(p1 < m) {
      p1++;
    }else {
      nums1 = nums1.concat(nums2.slice(p2))
      break;
    }
  }
  return nums1;
}; */

var merge = function(nums1, m, nums2, n) {
  let k = m + n - 1, i = m - 1, j = n - 1;
  while(j >= 0){
      nums1[i] >= nums2[j] ?  nums1[k--] = nums1[i--] : nums1[k--] = nums2[j--]
  }
};

// @lc code=end

