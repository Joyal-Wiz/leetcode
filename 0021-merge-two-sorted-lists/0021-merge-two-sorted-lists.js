/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let p1 = list1;
    let p2 = list2;
    let dummy = new ListNode(-1);
    let tail = dummy;
    while(p1!=null && p2!=null){
        if(p1.val<p2.val){
            tail.next = p1;
            p1 = p1.next;
        }else{
            tail.next = p2;
            p2 = p2.next;
        }
        tail = tail.next;
    }
    if(p1!=null)tail.next = p1;
    if(p2!=null)tail.next = p2;
    return dummy.next;
 
};