function factorialSolution(x) {
    if (x < 0) return 0;
    if (x <= 1) return 1;
    return x * factorialSolution(x - 1);
}
