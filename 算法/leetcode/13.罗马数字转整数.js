/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let res = 0;
  for (let i=0; i< s.length; i++) {
    if(i === i.length - 1){
      res += map[s[i]];
      break;
    }

    //判断是否比右侧字符小
    if(map[s[i]] < map[s[i+1]]){
      res += map[s[i+1]]-map[s[i]];
      i++;
    }else {
      //判断是否比右侧大
      res += map[s[i]];
    }
  }
  return res;
};
// @lc code=end
