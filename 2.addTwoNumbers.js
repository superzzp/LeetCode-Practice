//ListNode Definition
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let nv = 0;
    let temp = undefined;
    let head = undefined;
    while (l1 || l2) {
        let sum = 0;
        if (l1 && l2) {
            sum = l1.val + l2.val + nv;
            l1 = l1.next;
            l2 = l2.next;
        }else if (l1) {
            sum = l1.val + nv;
            l1 = l1.next;
        }else{
            sum = l2.val + nv;
            l2 = l2.next;
        }
        let c = sum % 10;
        let cnode = new ListNode(c);
        nv = Math.floor(sum/10);
        if (temp) { //error 1: use temp pointer, return head
            temp.next = cnode;
            temp = temp.next;
        }else{
            temp = cnode;
            head = temp;
        }
    }
    //Error 2: check nv in the end
    if (nv !== 0) {
        temp.next = new ListNode(nv);
    }//Error end
    return head;
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

l1 = new ListNode(2, (new ListNode(4, new ListNode(3))));
l2 = new ListNode(5, (new ListNode(6, new ListNode(4))));
addTwoNumbers(l1, l2)