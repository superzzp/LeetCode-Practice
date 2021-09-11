/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    return recursive(nums, 0, nums.length -1, target);
};

const recursive = function (nums, left, right, target) {
    //when length < 0;
    if (left > right || right < left) {
        return -1;
    }
    //when 0 <= length <= 1 
    if (left == right) {
        if (nums[left] == target) {
            return left;
        } else {
            return -1;
        }
    }
    //when length > 1
    let center = -1;
    //find center
    if ((left + right) % 2 == 0) { //odd
        center = (left + right) / 2;
    } else { //even
        center = (left + right -1) / 2;
    }
    if (nums[center] == target) {
        return center;
    } else {
        return Math.max(recursive(nums, left, center -1, target), 
                        recursive(nums, center + 1, right, target));
    }
}

console.log(search([0,1,-1], -1));
console.log(search([1,4,-1,0], 0));
console.log(search([4,5,6,7,0,1,2], 0));