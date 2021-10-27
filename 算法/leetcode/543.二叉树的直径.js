/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function(root) {
  let ans  = 1
  depth(root)
  return ans - 1

  function depth(root) {
    if(!root) {
      return 0;
    }
    
    let left = depth(root.left)
    let right = depth(root.right)
    ans = Math.max(ans, left + right + 1)
    return Math.max(left, right) + 1
  }
};
// @lc code=end

