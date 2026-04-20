class Solution {
    public int maxDistance(int[] colors) {

        int dis = 0;
        int n = colors.length;

        for(int i = 0; i < n; i++){
            for(int j = i + 1; j < n; j++){
                if(colors[i] != colors[j]){
                    dis = Math.max(dis, j - i);
                }
            }
        }

        return dis;
    }
}