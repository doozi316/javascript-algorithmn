function minSubArrayLen(arr, num) {
    let i = 0,
        j = 0;
    let maxCnt = Infinity,
        maxSum = Infinity;
    let cnt = 0,
        sum = 0;
    while (j < arr.length) {
        sum += arr[i];
        cnt++;

        if (num <= sum && sum < maxSum && cnt < maxCnt) maxCnt = cnt;

        if (i === arr.length - 1) {
            cnt = 0;
            sum = 0;

            j++;
            i = j;
        } else {
            i++;
        }
    }

    if (maxCnt === Infinity) return 0;
    return maxCnt;
}
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
