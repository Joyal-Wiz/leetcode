class Solution {
    public int diagonalSum(int[][] mat) {
        int start = 0;
        int end = mat.length-1;
        int sum = 0;
        for(int i=0;i<=mat.length-1;i++){
            sum += mat[start][start];
            if(start!=end){
                sum+= mat[start][end];
            }
            start++;
            end--;
        }
        return sum;
    }
}