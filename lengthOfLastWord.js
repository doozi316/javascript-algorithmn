/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const splited = s.split(' ');
    const result = splited.filter((s) => s).map((s) => s.trim());
    return result[result.length - 1].length;
};
