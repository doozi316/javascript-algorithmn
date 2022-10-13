function productOfArray(arr) {
    if (!arr.length) return 1;
    return arr.shift() * productOfArray(arr);
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60