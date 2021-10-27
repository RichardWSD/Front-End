/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

// 二叉树
var isSubtree = function(root, subRoot) {
  return dfs(root, subRoot)

  function dfs(s, t) {
    if(s === null){
      return false
    }
    return check(s, t) || dfs(s.left, t) || dfs(s.right, t)
  }

  function check(s, t) {
    if(s === null && t === null) {
      return true
    }
    if(s === null || t === null || s.val !== t.val) {
      return false
    }
    return check(s.left, t.left) && check(s.right, t.right)
  }
};
// @lc code=end

