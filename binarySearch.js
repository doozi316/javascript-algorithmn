function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let mid;

    if (arr[start] === val) return start;
    else if (arr[end] === val) return end;
    else if (arr[start] > val || arr[end] < val) return -1;

    while (mid !== start || mid !== end) {
        mid = parseInt((start + end) / 2);
        if (arr[mid] === val) return mid;
        else if (arr[mid] > val) {
            end = mid;
        } else {
            start = mid;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
    binarySearch(
        [
            5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95,
            96, 98, 99,
        ],
        10
    )
); // 2
console.log(
    binarySearch(
        [
            5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95,
            96, 98, 99,
        ],
        95
    )
); // 16
// binarySearch(
//     [
//         5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
//         98, 99,
//     ],
//     100
// ); // -1
