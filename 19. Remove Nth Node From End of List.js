/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

//Solve in one run: Backtracking recursion
 const removeNthFromEnd = function(head, n) {
    const dummyHead = new ListNode();
    dummyHead.next = head;
    const recursive = function(prev, curr) {
        if (curr == null) {
            return 1;
        }
        let count = recursive(curr, curr.next);
        if (count == n) {
            prev.next = curr.next;
        }
        return count + 1;
    }
    recursive(dummyHead, head);
    return dummyHead.next;
};



