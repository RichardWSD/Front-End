/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// 二叉树
var lowestCommonAncestor = function(root, p, q) {
    let ancestor = root
    while(true) {
      if(p.val < ancestor.val && q.val < ancestor.val) {
        ancestor = ancestor.left
      } else if (p.val > ancestor.val && q.val > ancestor.val) {
        ancestor  = ancestor.right
      } else {
        break
      }
    }
    return ancestor
};
// @lc code=end

