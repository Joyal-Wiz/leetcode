public class Solution {
    public int DistanceTraveled(int mainTank, int additionalTank) {
        if(mainTank>=5){
            return (mainTank+1)*10;
        }else{
            return mainTank*10;
        }
    }
}