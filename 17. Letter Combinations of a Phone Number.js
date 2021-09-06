//Use backtracking to generate permutations / combinations
//No solutions without brute force.

const letterCombinations = function(digits) {
    let combs = [];
    if(digits.length == 0) {
        return combs;
    }
    let map = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    }
    let permuation = function (comb, index) {
        if (index >= digits.length) {
            combs.push(comb);
            return;
        }
        const currChars = map[digits[index]];
        for (let c of currChars){
            permuation(comb + c, index + 1);
        }
    }
    permuation("", 0);
    return combs;
};

console.log(letterCombinations("23"));
console.log(letterCombinations(""));