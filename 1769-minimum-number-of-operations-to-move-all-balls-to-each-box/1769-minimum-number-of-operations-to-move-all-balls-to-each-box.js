/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
        let pos = [], ans = [];
        let len = boxes.length;
        
        for(let i = 0; i < len; i++) 
            if(boxes[i] === '1')
                pos.push(i);
        
        for(let i = 0; i < len; i++) {
            let sum = 0;
            for(let idx of pos) {
                let dst = Math.abs(i - idx);
                sum += dst;
            }
            ans.push(sum);
        }
        return ans;
};