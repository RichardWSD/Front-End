/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
/* var inorderTraversal = function(root, res = []) {
  if(root == null) {
    return res;
  }
  inorderTraversal(root.left, res)
  res.push(root.val)
  inorderTraversal(root.right, res)
  return res
}; */

// 深度优先搜索
// Morris 中序遍历有点难度，看懂了但是不好理解
var inorderTraversal = function(root) {
  if(root == null) {
    return [];
  }
  let stack = [], node = root, res = []
  while(node || stack.length) {
    while(node) {
      stack.push(node)
      node = node.left
    }
    if(stack.length) {
      node = stack.pop()
      res.push(node.val)
      node = node.right
    }
  }
  return res
};
// @lc code=end

