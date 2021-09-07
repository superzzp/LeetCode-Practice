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

//iterative solution
const mergeTwoLists = function(l1, l2) {
   let startDomme =  new ListNode();
   let prev = startDomme;
   while(l1 !== null && l2 !== null) {
       if(l1.val <= l2.val) {
           prev.next = l1;
           prev = l1;
           l1 = l1.next;
       } else {
           prev.next = l2;
           prev = l2;
           l2 = l2.next;
       }
   }
   if (l1 == null) {
        prev.next = l2;
   } else {
        prev.next = l1;
   }
   return startDomme.next;
};

//recursive solution

