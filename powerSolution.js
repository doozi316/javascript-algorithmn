function powerSolution(base, exponent) {
    if (exponent === 0) return 1;
    return base * powerSolution(base, exponent - 1);
}
