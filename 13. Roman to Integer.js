//Starting from back iteration
//Runtime: O(n), Space O(1)
const romanToInt = function (s) {
    let intSum = 0;
    const values = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900
    }
    if (s.length == 1) {
        intSum = values[s[0]]
    } else {
        intSum += values[s[s.length - 1]];
        for (i = s.length - 2; i >= 0; i--) {
            let lv = values[s[i]];
            let rv = values[s[i+1]];
            if (lv < rv) {
                intSum = intSum - lv;
            } else {
                intSum = intSum + lv;
            }
        }
    }
    return intSum;
};


console.log(romanToInt("III") == 3);
console.log(romanToInt("IV") == 4);
console.log(romanToInt("LVIII") == 58);
console.log(romanToInt("MCMXCIV") == 1994);