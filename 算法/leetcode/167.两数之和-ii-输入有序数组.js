/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let map = {};
  for(let i = 0; i < numbers.length; i++) {
    let targetNum = target - numbers[i];
    if(map[targetNum]) {
      return [map[targetNum], i + 1]
    }else {
      map[numbers[i]] = i + 1;
    }
  }
};
// @lc code=end

