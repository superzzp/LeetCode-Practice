//Brute Force
//Runtime: O(n^2)
const maxArea = function(height) {
    let maxArea = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            maxArea = Math.max(maxArea, getArea(i, j, height));
        }
    }
    return maxArea;
};

const getArea = function(i1, i2, height) {
    const area = (i2 - i1) * Math.min(height[i1], height[i2]);
    return area;
}

console.log(maxArea([1,1]));
console.log(maxArea([4,3,2,1,4]));
console.log(maxArea([1,2,1]));

//Optimization: Create two pointers, 
//at each step move the shorter line inwards. 

