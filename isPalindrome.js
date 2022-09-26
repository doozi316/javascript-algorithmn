/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const arr = [];

    if (x < 0) return false;

    do {
        arr.push(x % 10);
        x = parseInt(x / 10);
    } while (x / 10 !== 0);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) return false;
    }
    return true;
};
