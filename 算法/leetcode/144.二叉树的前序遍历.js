/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
  if(!root) {
    return []
  }
  let node = root, stack = [], res = []
  while(node || stack.length) {
    while(node) {
      res.push(node.val)
      stack.push(node)
      node = node.left
    }
    if(stack.length) {
      node = stack.pop()
      node = node.right
    }
  }
  return res
};
// @lc code=end

