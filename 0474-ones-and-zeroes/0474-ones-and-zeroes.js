/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    
  const split=Array.from({length: m + 1 },() =>Array(n +1).fill(0));

  for (const s of strs) {
    let z =0,o=0;
    for (const ch of s) (ch === '0')?z++:o++;

    for (let i=m;i>=z;i--) {
      for (let j=n;j>=o;j--) {
        split[i][j] = Math.max(split[i][j],split[i-z][j-o]+1);
      }
    }
  }
  return split[m][n];
};