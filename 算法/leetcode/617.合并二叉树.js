/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
/* var mergeTrees = function(root1, root2) {
  if(!root1 || !root2) {
    return root1 ? root1 : root2
  }

  let node = { val: root1.val + root2.val }
  node.left = mergeTrees(root1.left, root2.left)
  node.right = mergeTrees(root1.right, root2.right)
  return node
}; */

var mergeTrees = function(root1, root2) {
  if(!root1 || !root2) {
    return root1 ? root1 : root2
  }

  // let merge = { val: root1.val + root2.val }
  let merge = new TreeNode(root1.val + root2.val)
  let queue = [merge], queue1 = [root1], queue2 = [root2]
  while(queue1.length && queue2.length) {
    let node = queue.shift(), node1 = queue1.shift(), node2 = queue2.shift()
    let left1 = node1.left, left2 = node2.left
    let right1 = node1.right, right2 = node2.right
    if(left1 || left2) {
      if(left1 && left2) {
        // node.left = { val:  left1.val + left2.val }
        node.left = new TreeNode(left1.val + left2.val)
        queue.push(node.left)
        queue1.push(left1)
        queue2.push(left2)
      }else {
        node.left = left1 ? left1 : left2
      }
    }
    if(right1 || right2) {
      if(right1 && right2) {
        // node.right = { val:  right1.val + right2.val }
        node.right = new TreeNode(right1.val + right2.val)
        queue.push(node.right)
        queue1.push(right1)
        queue2.push(right2)
      }else {
        node.right = right1 ? right1 : right2
      }
    }
  }

  return merge
}; 
// @lc code=end

