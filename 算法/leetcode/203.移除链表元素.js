/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let cur = head, pre = null
  while(cur) {
    if(cur.val === val) {
      pre && (pre.next = cur.next)
    } else {
      // 找到了新的头节点
      if(pre === null) {
        head = cur
      }
      pre = cur
    }
    cur = cur.next
  }
  // 如果链表全都和val一样的话则pre不会被赋值
  return pre ? head : null
};
// @lc code=end

