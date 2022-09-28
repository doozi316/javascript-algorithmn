function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;

    let startIdx = 0,
        endIdx = num - 1;
    let max = -Infinity;
    let sum = 0;
    let i = startIdx;
    while (i <= endIdx) {
        sum += arr[i];
        if (i === endIdx) {
            if (sum > max) max = sum;
            startIdx++;
            endIdx++;
            sum = 0;
            i = startIdx;
            if (endIdx === arr.length) break;
        } else {
            i++;
        }
    }
    return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
