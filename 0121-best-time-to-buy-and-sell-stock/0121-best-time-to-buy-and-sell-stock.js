/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
let min=prices[0];
let profit=0;
for(let i=1;i<prices.length;i++){
    if(prices[i]<min){
        min=prices[i];
    }
    let dprofit=prices[i]-min;
    
    if(dprofit>profit){
        profit=dprofit;
    }
}
return profit 
};