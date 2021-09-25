/**
 * @param {number} n
 * @return {string}
 */

var countAndSay = function (n) {
    //base case 1, when n == 1
    if (n == 1) { return "1"; }
    else {
        lowerVal = countAndSay(n - 1); //trust the natural recursion!
        if (lowerVal.length == 1) { //when lowerVal's length is 1 
            //only happen when n = 2
            return "1" + lowerVal;
        } else {
            let currCount = 1
            let rtStr = ""
            for (let i = 1; i < lowerVal.length; i++) {
                if (lowerVal[i - 1] != lowerVal[i]) {
                    rtStr += (currCount + lowerVal[i - 1])
                    currCount = 1;
                } else {
                    currCount++;
                }
            }
            rtStr += (currCount + lowerVal[lowerVal.length-1])
            return rtStr;
        }
    }
};

console.log(countAndSay(4))