/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//Brute force, check every single position of haystack
//Time: O(m*n), m the length of haystack, n the length of needle
//Space: O(1), not taking extra space
const strStr = function(haystack, needle) {
    if (needle.length == 0) { // return 0 if input is ""
        return 0;
    }
    let i = 0;
    while (i <= (haystack.length - needle.length)) {
        let endIndex = i + needle.length - 1;
        let match = true;
        let needleIndex = 0;
        for (let j = i; j <= endIndex; j++) {
            if (needle[needleIndex] != haystack[j]) {
                match = false;
            }
            needleIndex++;
        }
        if (match) {
            return i;
        }
        i++;
    }
    return -1;
};
