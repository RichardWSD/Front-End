/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.main = [];
  this.min = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if(this.min.length === 0 || this.min[this.min.length-1] >= x) {
    this.min.push(x);
  }
  this.main.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let x = this.main.pop();
  if(this.min[this.min.length-1] === x) {
    this.min.pop();
  }
  return x;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.main[this.main.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min[this.min.length-1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

