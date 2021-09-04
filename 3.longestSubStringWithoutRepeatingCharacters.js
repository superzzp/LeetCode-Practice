//BruteForce. Runtime O(n^3)
const lengthOfLongestSubstringBF = function(s) {
    //let indexMap = {};
    let maxLen = 0;
    for (let start = 0; start < s.length; start++) {
        for (let end = start + 1; end < s.length + 1; end++) {
            maxLen = Math.max(maxLen, countUnique(s.substr(start,end)));
        }
    }
    return maxLen;
};

const countUnique = function(substr) {
    const wordMap = {};
    let count = 0;
    for (let i = 0; i < substr.length; i++) {
        let c = substr[i];
        if (wordMap[c]) {
            return count;
        }else{
            wordMap[c] = 1;
        }
        count ++;
    }
    return count;
}

//console.log(lengthOfLongestSubstringBF('abcabcbb'));
//console.log(lengthOfLongestSubstringBF('bbbbb'));
//console.log(lengthOfLongestSubstringBF('pwwkew'));


//Optimization: sliding window method
//Runtime: O(n), Space: O(m), m is the size of the indexMap
const lengthOfLongestSubstringOpt = function(s) {
    let indexMap = {};
    let maxLen = 0;
    let start = 0;
    let end = 0;
    while (end < s.length) {
        let c = s[end];
        if(indexMap[c] !== undefined) {
            if(indexMap[c] >= start){
                if(indexMap[c] < end) {
                    start = indexMap[c] + 1;
                }
            }
        }
        maxLen = Math.max(maxLen, end - start + 1);
        indexMap[c] = end;
        end++;
    }
    return maxLen;
};

console.log(lengthOfLongestSubstringOpt('abcabcbb'));
console.log(lengthOfLongestSubstringOpt('bbbbb'));
console.log(lengthOfLongestSubstringOpt('pwwkew'));