/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let pen = 0;
    const n = customers.length;
    for (let i = 0; i < n; i++) {
        if (customers.charCodeAt(i) === 89) pen++; 
    }

    let best = pen;
    let ans = 0;

    for (let i = 0; i < n; i++) {
        pen += (customers.charCodeAt(i) === 89) ? -1 : 1;

        if (pen < best) {
            best = pen;
            ans = i + 1;
        }
    }
    return ans;
};