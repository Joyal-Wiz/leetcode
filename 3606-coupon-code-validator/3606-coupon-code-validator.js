/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
  const order = {
    electronics: 0,
    grocery: 1,
    pharmacy: 2,
    restaurant: 3
  };

  let valid = [];

  for (let i = 0; i < code.length; i++) {
    if (!isActive[i]) continue;
    if (!code[i] || !/^[a-zA-Z0-9_]+$/.test(code[i])) continue;
    if (!(businessLine[i] in order)) continue;

    valid.push([order[businessLine[i]], code[i]]);
  }

  valid.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];   
    if (a[1] < b[1]) return -1;            
    if (a[1] > b[1]) return 1;
    return 0;
  });

  return valid.map(v => v[1]);

};