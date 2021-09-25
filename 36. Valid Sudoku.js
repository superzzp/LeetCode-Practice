/**
 * @param {character[][]} board
 * @return {boolean}
 */

//note the board is row-major (each inner array is a row of the board)
var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        //use set to check for duplicate
        let row = new Set();
        let col = new Set();
        let box = new Set();
        for (let j = 0; j < 9; j++) {
            let cRow = board[i][j];
            let cCol = board[j][i];
            let cBox = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]
            if (cRow !== ".") {
                if (row.has(cRow)) {
                    return false;
                } else {
                    row.add(cRow)
                }
            }
            if (cCol !== ".") {
                if (col.has(cCol)) {
                    return false;
                } else {
                    col.add(cCol)
                }
            }
            if (cBox !== ".") {
                if (box.has(cBox)) {
                    return false;
                } else {
                    box.add(cBox)
                }
            }
        }
    }
    return true
};
