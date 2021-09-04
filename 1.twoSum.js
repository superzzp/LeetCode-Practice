//Brute Force Algorithm, take O(n^2) time, O(n) space
var twoSumBF = function(nums, target) {
    var result = [];
    for (var i = 0; i<nums.length; i++) {
        for (var j = 0; j< nums.length; j++) {
            if (i != j) {
                var currSum = nums[i] + nums[j];
                if (currSum == target) {
                    result = [i, j];
                }
            }
        }
    }
    return result;
};
//console.log(twoSumBF([1,2], 3));


//Optimization: Time O(n), Space O(n)
//Note that dictionary key is unique. So the value to lookup should be able to be unique
var twoSumDict = function (nums, target) {
    var result = [];
    var numsDict = {};
    var complementDict = {};
    for (var i in nums) {
        var num = nums[i];
        var complement = target - num;
        complementDict[complement] = i;
    }
    for (var i in nums) {
        var num = nums[i];
        if (num in complementDict && i != complementDict[num]) {
            result = [complementDict[num], i];
        }
    }
    return result
}

console.log(twoSumDict([3,3], 6));