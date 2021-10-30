/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
// 双指针
var isPalindrome = function(head) {
  if (head == null) return true;

  // 找到前半部分链表的尾节点并反转后半部分链表
  const firstHalfEnd = endOfFirstHalf(head);
  const secondHalfStart = reverseList(firstHalfEnd.next);

  // 判断是否回文
  let p1 = head;
  let p2 = secondHalfStart;
  let result = true;
  while (result && p2 != null) {
      if (p1.val != p2.val) result = false;
      p1 = p1.next;
      p2 = p2.next;
  }        

  // 还原链表并返回结果
  firstHalfEnd.next = reverseList(secondHalfStart);
  return result;
};

function reverseList(head){
  let prev = null;
  let curr = head;
  while (curr) {
      let nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
  }
  return prev;
}

function endOfFirstHalf(head) {
  let fast = head;
  let slow = head;
  while (fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
  }
  return slow;
}

// @lc code=end

