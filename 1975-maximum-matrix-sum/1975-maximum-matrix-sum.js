/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let minabs=Infinity;
    let ncount=0;
    let sum=0;
    
    
    for(let i=0;i<matrix.length;i++ ){
    for(let j=0;j<matrix[0].length;j++){
     
     let val=matrix[i][j];
     sum+=Math.abs(val);
     minabs = Math.min(minabs, Math.abs(val));

     if(val<0){
         ncount++;
     }
    }}
    if(ncount%2!==0){
        sum-=2* minabs;
    }
    return sum
};