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
var middleNode = function(head) {
    let a = head;
    let b = head;

    while (b !== null && b.next !== null) {
        a = a.next;
        b = b.next.next;
    }

    return a;
};