function averagePair(arr, avg) {
    let idx = 0;
    let i = idx + 1;
    while (i < arr.length && idx < arr.length) {
        const pairAvg = arr[idx] + arr[i] / 2;
        if (avg === pairAvg) return true;
        i++;

        if (i === arr.length) {
            idx++;
            i = idx + 1;
        }
    }

    return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
