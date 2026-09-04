//https://leetcode.com/problems/container-with-most-water/description/

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

// Time complexity: O(N)
// Space complexity: O(1)

var maxArea = function (arr) {
    let i = 0;
    let j = arr.length - 1;
    let maxWater = 0;
    while (i < j) {
        let area = Math.min(arr[i], arr[j]) * (j - i);
        maxWater = Math.max(area, maxWater);
        if (arr[i] > arr[j]) j--;
        else i++;

    }
    return maxWater;
};