//Greedy Algorithm
//Compare with returning the min # of change
const intToRoman = function(num) {
    const digits = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], 
    [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], 
    [5, "V"], [4, "IV"], [1, "I"]];
    let romanDigits = "";
    let di = 0;
    while (num > 0) {
        let curDigits = digits[di][0];
        let curRomanDigits = digits[di][1];
        let quotidient = Math.floor(num / curDigits); 
        let remainder = num % curDigits;
        romanDigits += (curRomanDigits.repeat(quotidient));
        num = remainder;
        di++;
    }
    return romanDigits;
};


console.log(intToRoman(1001));

