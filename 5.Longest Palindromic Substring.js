//BruteForce, Runtime O(n^3)
const longestPalindromeBF = function(s) {
    if (s.length == 1) {
        return s;
    }
    let maxPalin = "";
    for (let i = 0; i < s.length; i ++) {
        for (let j = i + 1; j < s.length; j++) {
            let isPalin = checkIsPalindrome(s.substr(i,j));
            if (isPalin && (maxPalin.length < s.substr(i,j).length)) {
                maxPalin = s.substr(i,j);
            }
        }
    }
    return maxPalin;
};

const checkIsPalindromeBF = function(substr) {
    let stack = [];
    const substrLen = substr.length;
    if (substrLen % 2 == 0) { // even
        for (let i = 0;  i < substrLen/2; i++) {
            stack.push(substr[i]);
        }
        for (let j = substrLen/2; j < substrLen; j++) {
            let c = stack.pop();
            if (c !== substr[j]) {
                return false;
            }
        }
    }else{ //odd
        for (let i = 0;  i < Math.floor(substrLen/2); i++) {
            stack.push(substr[i]);
        }
        let midIndex = Math.floor(substrLen/2);
        for (let j = midIndex + 1; j < substrLen; j++) {
            let c = stack.pop();
            if (c !== substr[j]) {
                return false;
            }
        }
    }
    return true;
}
console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('a'));
console.log(longestPalindrome('ac'));

//Optimization - Expand from center. 
//Runtime O((2n-1) * n) = O(n^2), where #center = 2n-1.
const longestPalindrome = function(s) {
    if (s.length == 1) {
        return s;
    }
    let maxPalin = "";
    for (let i = 0; i < s.length; i++) {
        let evenPalin = expandFromCenter(i, i+1, s,true);
        let oddPalin = expandFromCenter(i-1, i+1, s, false);
        if (maxPalin.length < evenPalin.length) {
            maxPalin = evenPalin;
        }
        if (maxPalin.length < oddPalin.length) {
            maxPalin = oddPalin;
        }
    }
    return maxPalin;
};

const expandFromCenter = function(l, r, s, isEven) {
    if (isEven) {
        palin = ""
    }else {
        palin = s[l+1];
    }
    while (l >= 0 && r < s.length) {
        if (s[l] == s[r]) {
            palin = s[l] + palin + s[r];
        } else {
            return palin;
        }
        l--;
        r++;
    }
    return palin;
}
