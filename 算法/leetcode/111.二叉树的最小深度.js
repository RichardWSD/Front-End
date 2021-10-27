/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
/* var minDepth = function(root) {
  if(!root) {
    return 0;
  }
  if(!root.left) {
    return 1 + minDepth(root.right)
  }
  if(!root.right) {
    return 1 + minDepth(root.left);
  }
  return 1 + Math.min(minDepth(root.left), minDepth(root.right))
}; */

var minDepth = function(root) {
  if(!root) {
    return 0;
  }
  const queue = [{node: root, depth: 1}]
  while(queue.length) {
    const { node, depth } = queue.shift()
    if(!node.left && !node.right) {
      return depth
    }
    node.left && queue.push({ node: node.left, depth: depth + 1 })
    node.right && queue.push({ node: node.right, depth: depth + 1 })
  }
  // return 0
};
// @lc code=end

