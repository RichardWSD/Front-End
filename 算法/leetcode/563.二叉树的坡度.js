/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function(root) {
  let title = 0
  dfs(root)
  return title

  function dfs(o){
    if(!o){
      return 0
    }
    const left = dfs(o.left)
    const right = dfs(o.right)
    title += Math.abs(left - right)
    return  left + right + o.val
  }
};
// @lc code=end

