/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */

// 二叉树
var postorderTraversal = function(root) {
  if(!root) {
    return []
  }
  let stack = [], res=[], prev = null, node = root
  while(node || stack.length) {
    while(node) {
      stack.push(node)
      node = node.left
    }
    node = stack.pop()
    if(!node.right || node.right === prev) {
      res.push(node.val)
      prev = node
      node = null
    }else {
      stack.push(node)
      node = node.right
    }
  }
  return res
};
// @lc code=end

