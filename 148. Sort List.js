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
 const sortList = function(head) {
    if (head == null || head.next == null) {
        return head;
    } 
    const mid = getMid(head);
    const left = sortList(head);
    const right = sortList(mid);
    return merge(left, right);
};

const merge = function(l1, l2) {
    const dummyHead = new ListNode();
    let prev = dummyHead;
    while(l1 !== null && l2 !== null) {
        if(l1.val <= l2.val) {
            prev.next = l1;
            prev = l1;
            l1 = l1.next;
        }else{
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
    return dummyHead.next;
}

const getMid = function (l) {
    let midPrev = null; //note that midPrev start with null, instead of l
    while (l !== null && l.next !== null) {
        midPrev = (midPrev == null) ? l : midPrev.next;
        l = l.next.next;
    }
    const mid = midPrev.next; 
    midPrev.next = null; //cut the pointer from midPrev to mid;
    return mid;
}