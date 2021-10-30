/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function(root) {
  let ans = Number.MAX_SAFE_INTEGER, pre = -1
  const dfs = (root) => {
    if(!root)
      return
    
    dfs(root.left)
    if(pre === -1) {
      pre = root.val
    } else {
      ans = Math.min(ans, root.val - pre)
      pre = root.val
    }
    dfs(root.right)
  }
  dfs(root)
  return ans
};
// @lc code=end

