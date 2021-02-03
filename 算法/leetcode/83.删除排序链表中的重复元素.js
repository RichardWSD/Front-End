/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
// 这种有序无序的情况都可以处理
/* var deleteDuplicates = function(head) {
  if(!head || !head.next)
    return head;

  let cur = head.next;
  let pre = head;
  let map = {
    [head.val]: true
  };
  while(cur) {
    if(!map[cur.val]) {
      map[cur.val] = true;
      pre = cur;
    }else {
      pre.next = cur.next
    }
    cur = cur.next;
  }
  return head;
}; */

var deleteDuplicates = function(head) {
  let cur = head;
  while(cur && cur.next) {
    if(cur.val === cur.next.val) {
      cur.next = cur.next.next
    }else {
      cur = cur.next;
    }
  }
  return head;
};
// @lc code=end

