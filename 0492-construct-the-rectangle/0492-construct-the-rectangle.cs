public class Solution {
    public int[] ConstructRectangle(int area) {
        if(area == 1) return new int[] { 1, 1 };

        int sqrt = area / 2;
        int a = int.MinValue;
        int b = int.MinValue;

        while(true) {

            a = b;
            b = sqrt;
            sqrt = (sqrt + area / sqrt) / 2;
            if(sqrt == a || sqrt == b) break;
        }

        int w = sqrt;
        
        while(true) {

            if(area / w * w == area) return new int[] { area / w, w };
            w--;
        }

        return null;
    }
}