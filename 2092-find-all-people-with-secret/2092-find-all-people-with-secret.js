/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function(n, meetings, firstPerson) {
 meetings.sort((a, b) => a[2] - b[2]);

const parent = Array.from({ length: n }, (_, i) => i);
const know = Array(n).fill(false);
know[0] = know[firstPerson] = true;

const find = x => parent[x] === x ? x : (parent[x] = find(parent[x]));
const unite = (a, b) => {
    const pa = find(a), pb = find(b);
    if (pa !== pb) parent[pb] = pa;
};

for (let i = 0; i < meetings.length; ) {
    const time = meetings[i][2];
    const people = new Set();

    let j = i;
    while (j < meetings.length && meetings[j][2] === time) {
        const [x, y] = meetings[j];
        unite(x, y);
        people.add(x);
        people.add(y);
        j++;
    }
    const secretRoots = new Set();
    for (const p of people) {
        if (know[p]) secretRoots.add(find(p));
    }

    for (const p of people) {
        if (secretRoots.has(find(p))) know[p] = true;
    }

    for (const p of people) parent[p] = p;

    i = j;
}

return know.flatMap((v, i) => v ? i : []);

};