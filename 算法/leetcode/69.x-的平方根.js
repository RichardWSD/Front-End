/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if(x == 0 || x ==1){
      return x;
  }
  var left = 1;
  var right = x;
  while(left <= right){
     var middle = left + ((right-left)>>1);
     if(middle*middle == x){
         return middle;
     }else if(middle*middle > x){
         right = middle-1;
     }else{
         left = middle+1;
     }
  }
  // 往小取整数，所以取right，最后一次left与right相等时
  // 必然是由于middle的平方大于x导致right = middle-1，从而导致循环结束
  // 不会是走到left = middle+1去判断，因为这个left值已经在right变成与left相同之前的一轮已经判断过是大于x的了
  return right;
};

mySqrt(8)
// @lc code=end

