//ListNode Definition
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    const dummyHead = new ListNode(-1);
    let l = dummyHead;
    let carry = 0;
    while (l1 || l2) {
        sum = 0;
        if (l1) {
            sum += l1.val;
        }
        if (l2) {
            sum += l2.val;
        }
        sum += carry;
        l.next = new ListNode(sum % 10);
        carry = parseInt(sum/10);
        l = l.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    if (carry !== 0) {
        l.next = ListNode(carry);
    }
    return dummyHead.next;
};


// NOT RELATED ALBEIT THE RIGHT WAY TO REVERSE A LINKED LIST
var reverseList = function (l) {
    let node = l;
    let prev = undefined;
    while (node) {
        let temp = node.next;
        node.next = prev;
        prev = node;
        node = temp;
    }
    return prev;
}

//Optimization: 

