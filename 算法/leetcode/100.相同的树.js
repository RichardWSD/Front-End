/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if(p === null && q === null) {
    return true;
  }else if(p === null || q === null) {
    return false;
  }else {
    let curSame = p.val === q.val;
    let ls = isSameTree(p.left, q.left);
    let rs = isSameTree(p.right, q.right);
    return curSame && ls && rs;
  }
};
// @lc code=end

