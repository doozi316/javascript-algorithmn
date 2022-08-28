function countUniqueValues(arr) {
    let retNum = 0;
    let stand;

    arr.forEach((num) => {
        if (stand === num) return;
        else {
            stand = num;
            retNum++;
        }
    });

    return retNum;
}
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
