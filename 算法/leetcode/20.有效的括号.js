/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let lStr = '({[';
  let rStr = ')}]';
  let stack = [];
  if(s.length === 0 || rStr.includes(s[0]))
    return false;

  for (const it of s) {
    if(lStr.includes(it)){
      stack.push(it) 
    }else{
      if(rStr[lStr.indexOf(stack[stack.length - 1])] === it){
        stack.pop();
      }else{
        return false;
      }
    }
  }
  return !stack.length;
};
// @lc code=end

