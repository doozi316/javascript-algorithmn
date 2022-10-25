function reverseSolution(str) {
    if (str.length <= 1) return str;
    return reverseSolution(str.slice(1)) + str[0];
}
