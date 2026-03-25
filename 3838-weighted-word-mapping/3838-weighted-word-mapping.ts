function mapWordWeights(words: string[], weights: number[]): string {
    let ans = "";
    for (const s of words) {
        let cnt = 0;
        for (const ch of s) {
            cnt += weights[ch.charCodeAt(0) - 97];
        }
        ans += String.fromCharCode(97 + (25 - (cnt % 26)));
    }
    return ans;
}