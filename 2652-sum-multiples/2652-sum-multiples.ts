function sumOfMultiples(n: number): number {
let sum = 0
for (let i = 2; i <= n; i++) i % 3 == 0 || i % 5 == 0|| i % 7 == 0 ? sum += i : sum;
    return sum
};