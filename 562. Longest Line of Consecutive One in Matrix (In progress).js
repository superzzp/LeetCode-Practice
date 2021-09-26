/**
 * @param {number[][]} mat
 * @return {number}
 */
// In Progress, see below for failed test
// note:matrix mat is row major
var longestLine = function(mat) {
    let longestOneCount = 0;
    for (let r = 0; r < mat.length; r++) {
        let maxOneRow = 0;
        let maxOneDiag = 0;
        let maxOneAntiDiag = 0;
        let currMaxRow = 0;
        let currMaxDiag = 0;
        let currMaxAntiDiag = 0;
        for (let c = 0; c < mat[0].length; c++) {
            let curRow = mat[r][c];
            if (curRow == 1) {
                currMaxRow += 1;
                maxOneRow = Math.max(currMaxRow, maxOneRow)
            }else{
                currMaxRow = 0;
            }
            let dr = r;
            let dc = c;
            while (dr < mat.length && dc < mat[0].length) {
                let currDiag = mat[dr][dc];
                if (currDiag == 1) {
                    currMaxDiag += 1;
                    maxOneDiag = Math.max(currMaxDiag, maxOneDiag);
                } else {
                    currMaxDiag = 0;
                }
                dr++;
                dc++;
            }
            currMaxDiag = 0;
            let adr = r;
            let adc = c;
            while (adr >= 0 && adc >= 0) {
                let currAntiDiag = mat[adr][adc];
                if (currAntiDiag == 1) {
                    currMaxAntiDiag += 1;
                    maxOneAntiDiag = Math.max(currMaxAntiDiag, maxOneAntiDiag);
                } else {
                    currMaxAntiDiag = 0;
                }
                adr--;
                adc--;
            }
            currMaxAntiDiag = 0;
        }
        longestOneCount = Math.max(maxOneRow, maxOneDiag, maxOneAntiDiag, longestOneCount)
        //longestOneCount = Math.max(maxOneRow)
    }

    for (let c = 0; c < mat[0].length; c++) {
        let maxOneCol = 0;
        let currMaxCol = 0; 
        for (let r = 0; r < mat.length; r++) {
            let curCol = mat[r][c];
            if (curCol == 1) {
            currMaxCol += 1;
            maxOneCol = Math.max(currMaxCol, maxOneCol)
            }else{
                currMaxCol = 0;
            }
        }
        longestOneCount = Math.max(longestOneCount, maxOneCol)
    }
    return longestOneCount;
};


console.log(longestLine([[1,1,1,1],[0,1,1,0],[0,0,0,1]]))

[[1,1,0,0,1,0,0,1,1,0],
 [1,0,0,1,0,1,1,1,1,1],
 [1,1,1,0,0,1,1,1,1,0],
 [0,1,1,1,0,1,1,1,1,1],
 [0,0,1,1,1,1,1,1,1,0],
 [1,1,1,1,1,1,0,1,1,1],
 [0,1,1,1,1,1,1,0,0,1],
 [1,1,1,1,1,0,0,1,1,1],
 [0,1,0,1,1,0,1,1,1,1],
 [1,1,1,0,1,0,1,1,1,1]]