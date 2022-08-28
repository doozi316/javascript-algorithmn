function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let num1 of arr1) {
        const idx = arr2.indexOf(num1 ** 2);
        if (idx === -1) return false;
        else arr2.splice(idx, 1);
    }
    return arr2.length === 0;
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
