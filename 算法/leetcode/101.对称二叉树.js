/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
/* var isSymmetric = function(root) {
  if(root === null) {
    return true;
  }
  return isSameTree(root.left, root.right)

  function isSameTree(p, q) {
    if(p === null && q === null) {
      return true;
    }else if(p === null || q === null) {
      return false;
    }else {
      let curSame = p.val === q.val;
      let ls = isSameTree(p.left, q.right);
      let rs = isSameTree(p.right, q.left);
      return curSame && ls && rs;
    }
  }
}; */

var isSymmetric = function(root) {
  var q = [root, root], n, m
  while (q.length) {
      n = q.shift(), m = q.shift()
      if (!m && !n) continue
      if (!m || !n || m.val !== n.val) return false
      q.push(n.left, m.right, n.right, m.left)
  }
  return true
};
// @lc code=end

