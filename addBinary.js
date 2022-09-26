/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const digitA = getDigit(a);
    const digitB = getDigit(b);
    const digitRet = Number(digitA + digitB);

    return getBinary(digitRet);

    function getDigit(str) {
        let result = 0;
        const strArr = str.split('').reverse();
        for (let i = 0; i < strArr.length; i++) {
            result += Math.pow(2, i) * strArr[i];
        }
        return result;
    }

    function getBinary(num) {
        const result = [];
        do {
            result.unshift(num % 2);
            num = parseInt(num / 2);
        } while (num > 0);

        return result.join('');
    }
};
