function findClosest(x: number, y: number, z: number): number {
        let a=Math.abs(z - x);
    let b= Math.abs(z - y);
    if(a<b){
        return 1
    }else if(a>b){
        return 2
    }else{
        return 0
    }
};