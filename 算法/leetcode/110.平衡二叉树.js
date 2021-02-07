/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
// 自顶向下（暴力法）
// 原来我想的这种是暴力法。。。
/* var isBalanced = function(root) {
  if(!root) {
    return true;
  }
  let left = depth(root.left);
  let right = depth(root.right);
  return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};

function depth(root){
  if(!root) {
    return 0;
  }
  return Math.max(1 + depth(root.left), 1 + depth(root.right));
}; */

// 自底向上（优化）
var isBalanced = function (root) {
  return balanced(root) !== -1
};
var balanced = function (node) {
  if (!node) return 0
  const left = balanced(node.left)
  const right = balanced(node.right)
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1
  }
  return Math.max(left, right) + 1
}
// @lc code=end

