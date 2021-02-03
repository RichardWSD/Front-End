/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let hLen = haystack.length;
  let nLen = needle.length;
  for(let i = 0; i <= hLen - nLen; i++){
    let j = 0;
    for(; j < nLen; j++) {
      if(haystack[i+j] !== needle[j]) {
        break;
      }
    }
    if(j === nLen) {
      return i;
    }
  }
  return -1;
};
strStr('hello', 'll');
// @lc code=end

