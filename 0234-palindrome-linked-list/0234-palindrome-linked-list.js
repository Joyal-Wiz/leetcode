/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null || head.next === null) return true;
    let slow=head;
    let fast=head;

    while(fast!==null && fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;
    }
    let prev = null;
    let curr = slow;

    while (curr !== null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    let left = head;
    let right = prev;

    while (right !== null) {
        if (left.val !== right.val) {
            return false;
            }
            
        left = left.next;
        right = right.next;
    }
    return true


};