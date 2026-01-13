/**
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function(squares) {
     let L = 0.0, R = 1e9;
        let Ans = 0.0;

        for (let it = 0; it < 80; it++) { 
            let mid = L + (R - L) / 2.0;
            let LA = 0.0, UA = 0.0;

            for (let i = 0; i < squares.length; i++) {
                let y = squares[i][1];
                let l = squares[i][2];
                let TA = l * l;

                if (y + l <= mid) {
                    LA += TA;                     
                } else if (y >= mid) {
                    UA += TA;                    
                } else {
                    let below = (mid - y) * l;   
                    LA += below;
                    UA += TA - below;
                }
            }

            if (LA >= UA) {
                Ans = mid;
                R = mid;
            } else {
                L = mid;
            }
        }

        return Ans;
};