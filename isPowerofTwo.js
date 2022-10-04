/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
    if (n === 1) return true;
    if (n <= 0) return false;
    while (n >= 2) {
        if (n % 2 !== 0) return false;
        n /= 2;
    }
    return true;
}
