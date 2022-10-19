function recursiveRangeSolution(x) {
    if (x === 0) return 0;
    return x + recursiveRangeSolution(x - 1);
}
