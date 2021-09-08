/**
 * @param {number} n
 * @return {string[]}
 */

//Backtracking Brute Force:
//Remember: can use backtracking to generate sequences/permutations
const generateParenthesis = function(n) {
    let seqs = [];
    const genSequences = function(seq, open, close) {
     if (open + close == 2 * n) { //base case
        seqs.push(seq);
        return;
     }
     if (open <= close && open < n) { //can add open paren
        genSequences(seq + '(', open + 1, close);
     } else if (open > close) { //can add both open and close paren
        if (open < n) {
            genSequences(seq + '(', open + 1, close);
        }
        if (close < n) {
            genSequences(seq + ')', open, close + 1);
        }
     }
    }
    genSequences('', 0, 0);
    return seqs;
};