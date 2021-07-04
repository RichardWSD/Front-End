/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(!head || !head.next) {
    return false
  }

  let s = head, f = head.next.next
  while(s && f) {
    if(s === f) {
      return true
    } else if(f.next === null) {
      return false
    }
    s = s.next, f = f.next.next
  }
  return false
};
// @lc code=end

