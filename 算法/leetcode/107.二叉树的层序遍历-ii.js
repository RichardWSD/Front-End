/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if(!root) {
    return []
  }
  let queue = [];
  let res = [];
  queue.push([root])
  res.push([root.val]);
  while(queue.length) {
    let nodes = queue.pop();
    let item = [];
    let q = [];
    for(let node of nodes) {
      if(node.left){
        q.push(node.left);
        item.push(node.left.val)
      }
      if(node.right) {
        q.push(node.right);
        item.push(node.right.val);
      }
    }
    
    q.length && queue.push(q);
    item.length && res.unshift(item);
  }
  return res;
};
// @lc code=end

