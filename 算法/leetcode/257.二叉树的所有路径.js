/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */

// 二叉树
var binaryTreePaths = function(root) {
  if(!root) {
    return []
  }
  const node_queue = [root], path_queue = [`${root.val}`], paths = []
  while(node_queue.length) {
    const node = node_queue.pop(), path = path_queue.pop()
    if(!node.left && !node.right) {
      paths.push(path)
    } else {
      if(node.left) {
        node_queue.push(node.left)
        path_queue.push(`${path}->${node.left.val}`)
      }
      if(node.right) {
        node_queue.push(node.right)
        path_queue.push(`${path}->${node.right.val}`)
      }
    }
  }
  return paths
};
// @lc code=end

