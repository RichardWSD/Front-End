/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let arr = s.split(' ').reverse();;
  let last = arr.find(e => e.length !== 0);
  return last ? last.length : 0;
};
// @lc code=end

