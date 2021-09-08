/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    if (nums.length == 0 || nums.length == 1) {
        return nums;
    }
    let forwardIndex = 0;
    let backIndex = forwardIndex;
    while (forwardIndex < nums.length) {
        if(nums[backIndex] == nums[forwardIndex]) {
            forwardIndex ++;
        }else{
            nums[backIndex + 1] = nums[forwardIndex];
            forwardIndex++;
            backIndex++;
        }
    }
    return backIndex + 1;
};

console.log(removeDuplicates([1,1,2]))