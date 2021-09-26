/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//This works, but need to find better runtime
var combinationSum = function(candidates, target) {
    let resultCombins = [];
    var recursive = function(combo, candidates, target) {
        for (let c = 0; c < candidates.length; c++) {
            let currVal = candidates[c];
            if (currVal == target) {
                resultCombins.push(combo.concat([currVal]));
            } else if (currVal < target) {
                recursive(combo.concat([currVal]), candidates, target - currVal)
            }
        }
    }
    recursive([], candidates, target);
    let resultSet = new Set()
    let returnCombins = []
    for (let comb of resultCombins) {
        let str = JSON.stringify(comb.sort())
        if (!resultSet.has(str)) {
            resultSet.add(str)
            returnCombins.push(comb)
        }
    }
    return returnCombins;
};

console.log(combinationSum([2,3,6,7], 7))