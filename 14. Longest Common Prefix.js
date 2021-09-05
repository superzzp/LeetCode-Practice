// Vertical Scanning: Runtime: O(m*n)
// m is the length of the shortest str,
// n is the length of the strs
// Space: O(1)
const longestCommonPrefix = function(strs) {
    let pf = "";
    let pfPt = 0;
    let currC = "";
    while (pfPt < strs[0].length) {
        currC = strs[0][pfPt];
        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            if (currC !== str[pfPt]) {
                return pf;
            }
        }
        pf += currC;
        pfPt++;
    }
    return pf;
};

console.log(longestCommonPrefix(["flower","flow","flight"]) == "fl");
console.log(longestCommonPrefix(["dog","racecar","car"]) == "");
console.log(longestCommonPrefix([""]) == "");

