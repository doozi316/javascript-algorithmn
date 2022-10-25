function isPalindromeSolution(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindromeSolution(str.slice(1, -1));
    return false;
}
