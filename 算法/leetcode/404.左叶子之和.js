/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 二叉树
var sumOfLeftLeaves = function(root) {
  if(!root) {
    return 0
  }
  let queue = [root], sum = 0
  while(queue.length) {
    root = queue.pop()
    if(root.left) {
      if(!root.left.left && !root.left.right) {
        sum += root.left.val
      } else {
        queue.push(root.left)
      }
    }
    if (root.right && (root.right.left || root.right.right)) {
      queue.push(root.right)
    }
  }
  return sum
};

// @lc code=end

