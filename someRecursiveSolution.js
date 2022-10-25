function someRecursiveSolution(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursiveSolution(array.slice(1), callback);
}
