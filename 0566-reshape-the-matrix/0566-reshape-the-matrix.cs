public class Solution {
    public int[][] MatrixReshape(int[][] mat, int r, int c) {
        if(r*c != mat.Length * mat[0].Length) return mat;
        
        int[][] result = new int[r][];        
        int matrow = 0, matcol = 0;
        int row = 0, col = 0;
        int[] temp = new int[c];
        while(row < r){
            if(col == c){
                col = 0;
                result[row++] = (int[])temp.Clone();
            }else{
                if(matcol >= mat[0].Length){
                    matcol = 0;
                    ++matrow;
                }
                temp[col++] = mat[matrow][matcol++];                
            } 
        }        
        return result;
    }
}