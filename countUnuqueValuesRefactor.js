function countUniqueValuesRRefactor(arr) {
    if (!arr.length) return 0;

    var i = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValuesRRefactor([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValuesRRefactor([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValuesRRefactor([]));
console.log(countUniqueValuesRRefactor([-2, -1, -1, 0, 1]));
