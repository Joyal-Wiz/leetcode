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
var insertGreatestCommonDivisors = function(head) {
       
 if (head === null) return null;

    let curr = head;

    while (curr.next !== null) {
        let a = curr.val;
        let b = curr.next.val;

        while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
        let newNode = new ListNode(a);
        newNode.next = curr.next;
        curr.next = newNode;
        curr = newNode.next;
    }

    return head;
};