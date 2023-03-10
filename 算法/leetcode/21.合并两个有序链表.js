/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//  https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/hua-jie-suan-fa-21-he-bing-liang-ge-you-xu-lian-bi/
var mergeTwoLists = function(l1, l2) {
  if(l1 == null){
      return l2;
  }
  if(l2 == null){
      return l1;
  }
  if(l1.val <= l2.val){
      l1.next = mergeTwoLists(l1.next,l2);
      return l1;
  }else{
      l2.next = mergeTwoLists(l1,l2.next);
      return l2;
  }
}

mergeTwoLists([],[])
// @lc code=end

