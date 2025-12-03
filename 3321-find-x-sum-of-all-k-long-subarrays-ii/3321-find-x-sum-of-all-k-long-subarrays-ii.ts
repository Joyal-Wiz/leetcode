export function findXSum(nums: number[], k: number, x: number): number[] {
    const lazyQueue = new LazyMaxXQueue(x)
    const res: number[] = []
    let sum = 0

    for (let ix = 0; ix < nums.length; ix++) {
        const curr = nums[ix]
        sum = lazyQueue.processEle(curr, 1, sum)

        if (ix >= k) sum = lazyQueue.processEle(nums[ix - k], -1, sum)

        lazyQueue.lazyRemove()
        sum = lazyQueue.fillTopX(sum)

        if (ix >= k - 1) res.push(sum)
    }

    return res
}

const compare = (a: number[], b: number[]) => b[0] - a[0] || b[1] - a[1]
class LazyMaxXQueue {
    private setTopX = new Set<number>()
    private counter: Record<number, number> = {}
    private topX = new MaxPriorityQueue<number[]>({ compare })
    private rest = new MinPriorityQueue<number[]>({ compare })
    constructor(private x: number) { }

    processEle(val: number, addOrRemove: 1 | -1, currSum: number): number {
        this.counter[val] = (this.counter[val] ?? 0) + addOrRemove
        // if (this.counter[val] < 0) throw new Error('Wrong Logic')

        if (this.setTopX.has(val)) {
            this.topX.enqueue([this.counter[val], val])
            currSum += val * addOrRemove
        } else {
            this.rest.enqueue([this.counter[val], val])
        }

        return currSum
    }

    lazyRemove(): void {
        while (!this.topX.isEmpty()) {
            const [freq, val] = this.topX.front()
            if (this.counter[val] !== freq || !this.setTopX.has(val)) {
                this.topX.pop()
            } else break
        }

        while (!this.rest.isEmpty()) {
            const [freq, val] = this.rest.front()
            if (this.counter[val] !== freq || this.setTopX.has(val)) {
                this.rest.pop()
            } else break
        }
    }

    fillTopX(currSum: number): number {
        while (!this.rest.isEmpty()) {
            if (this.setTopX.size >= this.x) {
                currSum = this.swap2QueueTop(currSum)
                break
            }

            const [freq, val] = this.rest.pop()
            this.topX.enqueue([freq, val])
            this.setTopX.add(val)
            currSum += freq * val
        }

        return currSum
    }

    private swap2QueueTop(currSum: number): number {
        if (this.topX.isEmpty() || this.rest.isEmpty()) return currSum

        const [restFreq, restVal] = this.rest.front()
        const [topXFreq, topXVal] = this.topX.front()

        const shouldSwap =
            restFreq > topXFreq || (restFreq === topXFreq && restVal > topXVal)

        if (shouldSwap) {
            this.topX.pop()
            this.rest.pop()
            this.setTopX.delete(topXVal)
            this.setTopX.add(restVal)

            this.topX.enqueue([restFreq, restVal])
            this.rest.enqueue([topXFreq, topXVal])

            currSum = currSum + restFreq * restVal - topXFreq * topXVal
        }

        return currSum
    }
}