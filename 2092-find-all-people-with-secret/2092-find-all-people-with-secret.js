/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function(n, meetings, firstPerson) {
meetings.sort((a, b) => a[2] - b[2]);

const know = new Array(n).fill(false);
know[0] = know[firstPerson] = true;

let i = 0;

while (i < meetings.length) {
    const time = meetings[i][2];

    const graph = new Map();
    const queue = [];

    let j = i;
    while (j < meetings.length && meetings[j][2] === time) {
        const [x, y] = meetings[j];

        if (!graph.has(x)) graph.set(x, []);
        if (!graph.has(y)) graph.set(y, []);

        graph.get(x).push(y);
        graph.get(y).push(x);

        j++;
    }
    for (const person of graph.keys()) {
        if (know[person]) queue.push(person);
    }

    for (let k = 0; k < queue.length; k++) {
        const u = queue[k];
        for (const v of graph.get(u)) {
            if (!know[v]) {
                know[v] = true;
                queue.push(v);
            }
        }
    }

    i = j;
}

return know.map((v, i) => v ? i : -1).filter(v => v !== -1);


};