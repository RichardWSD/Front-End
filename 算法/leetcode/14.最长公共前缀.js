/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
/* var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return '';
  let idx = 0;
  let min = Math.min(...strs.map(s => s.length));
  while(idx < min) {
    let str = strs[0].substr(0, idx + 1);
    if(!strs.every(s => s.startsWith(str))) {
      break;
    }
    idx++;
  }
  return strs[0].substr(0, idx);
}; */

var longestCommonPrefix = function(strs) {
  if (strs === null || strs.length === 0) return "";
  let prevs = strs[0]
  for(let i = 1; i < strs.length; i++) {
      let j = 0
      for(; j < prevs.length && j < strs[i].length; j++) {
          if(prevs.charAt(j) !== strs[i].charAt(j)) break
      }
      prevs = prevs.substring(0, j)
      if(prevs === "") return ""
  }
  return prevs
};
// @lc code=end

