/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  let pre
  while(head) {
    const next = head.next
    head.next = pre
    pre = head 
    head = next
  }
  return pre
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3
    }
  }
}

reverseList(head)
// @lc code=end

