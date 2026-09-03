//https://leetcode.com/problems/container-with-most-water/description/



//Js:
/**
 * @param {number[]} height
 * @return {number}
 */
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