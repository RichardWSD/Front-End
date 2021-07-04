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
/* var isValid = function(s) {
  let lStr = '({[';
  let rStr = ')}]';
  let stack = [];
  if(rStr.includes(s[0]))
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
}; */

// https://leetcode-cn.com/problems/valid-parentheses/solution/you-xiao-de-gua-hao-by-leetcode-solution/
var isValid = function(s) {
  const n = s.length;
  if (n % 2 === 1) {
      return false;
  }
  const pairs = new Map([
      [')', '('],
      [']', '['],
      ['}', '{']
  ]);
  const stk = [];
  for (let ch of s){
      if (pairs.has(ch)) {
          if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
              return false;
          }
          stk.pop();
      } 
      else {
          stk.push(ch);
      }
  };
  return !stk.length;
};
// @lc code=end

