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
let sum=0;
let newLL = new ListNode(0);
let tail = newLL; 
let curr=head;
while(curr!==null){
    if(curr.val!==0){
        sum=sum+curr.val;
    }else{
         if (sum !== 0) {
                tail.next = new ListNode(sum);
                tail = tail.next;
                sum = 0; 
            }
    }
curr=curr.next
}
return newLL.next
};
