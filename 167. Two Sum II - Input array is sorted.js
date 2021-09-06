//Note that we can use Brute Force (O(n^2)) time or hash map (O(n)) time method.
//But we can do better, by using the two pointer method:
//This achieve Time O(n), Space O(1).
var twoSum = function(numbers, target) {
    let s = 0;
    let e = numbers.length - 1;
    while (s !== e) {
        sum = numbers[s] + numbers[e];
        if (sum > target) {
            e--;
        }else if (sum < target) {
            s++;
        }else{
            return [s+1,e+1]; //note we are returning the position, starting from 1.
        }
    }
    return [];
};