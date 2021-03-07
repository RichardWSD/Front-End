/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if(!s) {
    return true;
  }
  let left = 0, right = s.length - 1;
  let reg = /[a-zA-Z0-9]/;
  for(;left < right;) {
    if(!reg.test(s[left])) {
      left++;
      continue;
    }
    if(!reg.test(s[right])) {
      right--;
      continue;
    }
    if(s[left].toLowerCase() === s[right].toLowerCase()) {
      left++;
      right--;
    }else {
      return false;
    }
  }
  return true;
};
// @lc code=end

