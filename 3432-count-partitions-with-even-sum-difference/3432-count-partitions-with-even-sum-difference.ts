function countPartitions(nums: number[]): number {

  let total = 0;
    
    for (let i=0;i<nums.length;i++) {
        total += nums[i];
    }
    let leftSum=0;
    let count=0;

    for (let i=0;i<nums.length-1;i++) {
        leftSum += nums[i];  
        let rightSum = total-leftSum;

        if ((leftSum-rightSum)%2===0) {
            count++;
        }
    }
    return count;

};