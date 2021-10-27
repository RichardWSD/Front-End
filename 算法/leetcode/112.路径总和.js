/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
// 二叉树
/* var hasPathSum = function(root, targetSum) {
  if(!root) {
    return false;
  }
  targetSum -= root.val;
  if(targetSum === 0 && !root.left && !root.right) {
    return true;
  }
  let left = hasPathSum(root.left, targetSum);
  let right = hasPathSum(root.right, targetSum);
  return left || right;
}; */

var hasPathSum = function(root, targetSum) {
  if(!root) {
    return false;
  }
  const queNode = [root]
  const queVal = [root.val]
  while(queNode.length) {
    const now = queNode.shift()
    const temp = queVal.shift()
    if(!now.left && !now.right) {
      if(temp === targetSum) {
        return true
      }
      continue
    }
    if(now.left) {
      queNode.push(now.left)
      queVal.push(now.left.val + temp)
    }
    if(now.right) {
      queNode.push(now.right)
      queVal.push(now.right.val + temp)
    }
  }
  return false
};
// @lc code=end

