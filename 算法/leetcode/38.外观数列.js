/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
//  https://leetcode-cn.com/problems/count-and-say/solution/tong-guo-zheng-ze-he-bing-xiang-tong-yuan-su-wan-c/
var countAndSay = function(n) {
  let prev = '1'
  for(let i = 1; i < n; i++){
      prev = prev.replace(/(\d)\1*/g, item =>`${item.length}${item[0]}`)
  }
  return prev
};
// @lc code=end

