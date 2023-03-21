/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        const v = nums[i];
        const diff = target - v;
        if (seen.has(diff))
            return [i, seen.get(diff)];
        else seen.set(v, i);
    }
};