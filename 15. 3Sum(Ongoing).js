//TODO: Brute Force: Runtime: O(n^3)
//This is still wrong! need to remove duplicate triples
const threeSum = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[k] + nums[j] == 0) {
                    result.push([nums[i], nums[k], nums[j]]);
                }
            }
        }
    }
    return result;
};

//TODO: rewrite array comparison 
console.log(threeSum([-1,0,1,2,-1,-4]) == [[-1,-1,2],[-1,0,1]]);
console.log(threeSum([]) == []);
console.log(threeSum([0]) == []);