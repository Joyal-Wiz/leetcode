function countMentions(numberOfUsers: number, events: string[][]): number[] {
    const byTime = new Map<number, string[][]>();

    for (const ev of events) {
        const t = parseInt(ev[1], 10);
        if (!byTime.has(t)) byTime.set(t, []);
        byTime.get(t)!.push(ev);
    }

    const timestamps = Array.from(byTime.keys()).sort((a, b) => a - b);

    const mentions: number[] = Array(numberOfUsers).fill(0);
    const isOnline: boolean[] = Array(numberOfUsers).fill(true);
    const offlineUntil: number[] = Array(numberOfUsers).fill(0);

    for (const t of timestamps) {
        const evs = byTime.get(t)!;

        // Bring users back online
        for (let i = 0; i < numberOfUsers; i++) {
            if (!isOnline[i] && offlineUntil[i] <= t) {
                isOnline[i] = true;
                offlineUntil[i] = 0;
            }
        }

        // Handle OFFLINE events
        for (const ev of evs) {
            if (ev[0] === "OFFLINE") {
                const id = parseInt(ev[2], 10);
                if (!isNaN(id)) {
                    isOnline[id] = false;
                    offlineUntil[id] = t + 60;
                }
            }
        }

        // Handle MESSAGE events
        for (const ev of evs) {
            if (ev[0] !== "MESSAGE") continue;

            const tokens = ev[2].trim().split(/\s+/);

            for (const token of tokens) {
                if (token === "ALL") {
                    for (let i = 0; i < numberOfUsers; i++) mentions[i]++;
                } else if (token === "HERE") {
                    for (let i = 0; i < numberOfUsers; i++) {
                        if (isOnline[i]) mentions[i]++;
                    }
                } else if (token.startsWith("id")) {
                    const id = parseInt(token.slice(2), 10);
                    if (!isNaN(id) && id >= 0 && id < numberOfUsers) {
                        mentions[id]++;
                    }
                }
            }
        }
    }

    return mentions;
}
