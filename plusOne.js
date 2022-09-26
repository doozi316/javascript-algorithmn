/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    digits[digits.length - 1] += 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (Math.floor(digits[i] / 10) <= 0) continue;
        const curNum = digits[i];
        digits[i] %= 10;
        digits[i - 1] = digits[i - 1] + curNum / 10;
        if (!digits[i - 1]) digits.unshift(curNum / 10);
    }
    return digits;
};
