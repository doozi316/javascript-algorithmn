function productOfArraySolution(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArraySolution(arr.slice(1));
}
