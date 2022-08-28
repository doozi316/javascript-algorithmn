function same_refactor(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let frequencyConter1 = {};
    let frequencyConter2 = {};

    for (let val of arr1)
        frequencyConter1[val] = (frequencyConter1[val] || 0) + 1;

    for (let val of arr2)
        frequencyConter2[val] = (frequencyConter2[val] || 0) + 1;

    for (let key in frequencyConter1) {
        if (!frequencyConter2[key ** 2]) return false;
        if (frequencyConter2[key ** 2] !== frequencyConter1[key]) return false;
    }
    console.log(frequencyConter1);
    console.log(frequencyConter2);
    return true;
}

console.log(same_refactor([1, 2, 3], [4, 1, 9]));
console.log(same_refactor([1, 2, 3], [1, 9]));
console.log(same_refactor([1, 2, 1], [4, 4, 1]));
