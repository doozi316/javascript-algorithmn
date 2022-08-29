function areThereDuplicatesSolution3() {
    return new Set(arguments).size() !== arguments.length;
}