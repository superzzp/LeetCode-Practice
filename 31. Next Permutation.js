/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const nextPermutation = function(nums) {
    //iterate from the last till the second elem of nums
    let stack = [];
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i-1] < nums[i]) {
            let frontVal = nums[i-1]; //TEMP STORE FRONT VAL
            let backIndex = -1;
            for (let j = i; j < nums.length; j++) {
                if (nums[j] > nums[i-1]) {
                    backIndex = j;
                }
            }
            //SWAP BACK AND FRONT
            nums[i-1] = nums[backIndex];  
            nums[backIndex] = frontVal;
            //REVERSE ARRAY;
            
            for (let k = i; k < nums.length; k++) {
                stack.push(nums[k]);
            }
            for (let q = i; q < nums.length; q++) {
                nums[q] = stack.pop();
            }
            return nums;
        }
    }
    //rearrange to acending order if permutation is not found;
    //(optional)
    for (let m = 0; m < nums.length; m++) {
        stack.push(nums[m]);
    }
    for (let n = 0; n < nums.length; n++) {
        nums[n] = stack.pop();
    }
    return nums;
};

console.log((nextPermutation([3,2,1])));
console.log((nextPermutation([1,3,2])));