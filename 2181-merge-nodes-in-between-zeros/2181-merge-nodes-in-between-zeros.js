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
var mergeNodes = function(head) {
    let node = head;
    let prev = head;
    let sum = 0;

    node = node.next;

    while (node) {
        if (node.val === 0) {
            prev.val = sum;
            sum = 0;
            if (node.next) {
                prev = prev.next;
            } else {
                prev.next = null;
            }
        } else {
            sum += node.val;
        }
        node = node.next;
    }

    return head;
};