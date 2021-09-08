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

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

//Recursive functions: swap a pair at each recursive steps.
const swapPairs = function (head) {
    if (head == null || head.next == null) { 
        //return head if the current list has 0 or 1 item remains
        return head;
    }
    let nextPair = head.next.next;
    let first = head;
    let second = head.next;
    second.next = first;
    first.next = swapPairs(nextPair);
    return second;
};


let d = new ListNode(4);
let c = new ListNode(3, d);
let b = new ListNode(2, c);
let a = new ListNode(1, b);


console.log(swapPairs(a));