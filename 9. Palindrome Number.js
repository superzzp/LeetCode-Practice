//Convert to string, then check palindrome
var isPalindrome = function(x) {
    let si = String(x);
    if (si.length == 1) {
        return true;
    }
    let l = 0;
    let r = 0;
    if (si.length % 2 == 0) { //even
        l = si.length / 2 - 1;
        r = si.length / 2;
    } else { //odd
        let center = Math.floor(si.length / 2);
        l = center - 1;
        r = center + 1;
    }
    while (l >= 0 && r < si.length) {
        if (si[l] != si[r]) {
            return false;
        }
        l--;
        r++;
    }
    return true;
}; 


console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));


//Without converting to string:

