/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/160xiang-jiao-lian-biao-shuang-zhi-zhen-ha-xi-biao/
/* var getIntersectionNode = function(headA, headB) {
  let p1 = headA, p2 = headB;
  let changeCount =0;
  while(p1 && p2) {
    if(p1 === p2) {
      return p1;
    }else {
      p1 = p1.next;
      p2 = p2.next;
      if(p1 === null && changeCount < 2) {
        p1 = headB;
        changeCount++;
      }
      if(p2 === null && changeCount < 2) {
        p2 = headA;
        changeCount++;
      }
    }
  }
  return null;
}; */

var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let pA = headA,
      pB = headB;
  while (pA !== pB) {
      pA = pA === null ? headB : pA.next;
      pB = pB === null ? headA : pB.next;
  }
  return pA;
};
// @lc code=end

