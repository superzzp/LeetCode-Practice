/**
 * @param {number} n
 * @return {number}
 */
//When writing recursive function, either choose global sum, no return or
//scoped sum, return

var numTrees = function (n) {
    let sum = 0;
    //Base case
    if (n == 0 || n == 1) {
        return 1;
    }
    for (let i = 0; i < n; i++) {
        if (i == 0) {
            sum += numTrees(n - 1)
        }
        else if (i == n.length - 1) {
            sum += numTrees(i - 1);
        }
        else {
            sum += numTrees(i - 1) * numTrees(n - i)
        }
    }
    return sum;
};

console.log(numTrees(3))