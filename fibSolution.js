function fibSolution(n) {
    if (n <= 2) return 1;
    return fibSolution(n - 1) + fibSolution(n - 2);
}
