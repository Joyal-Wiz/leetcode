function sortedSquares(nums: number[]): number[] {
    let left=0;
    let right =nums.length-1;
    let pos = nums.length-1;
    let arr =[];
    while(left<=right){
        if(Math.abs(nums[left])>Math.abs(nums[right])){
            arr[pos] = nums[left]*nums[left];
            left++;
        }else{
            arr[pos] = nums[right]*nums[right];
            right--;
        }
        pos--
    }return arr

};