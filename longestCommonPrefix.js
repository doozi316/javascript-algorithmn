/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let resultStr = '';
    for (let i = 0; i < strs[0].length; i++) {
        let isAllSame = false;
        for (let j = 0; j < strs.length; j++) {
            isAllSame = strs[j][i] === strs[0][i];
            if (!isAllSame) return resultStr;
        }
        if (isAllSame) resultStr += strs[0][i];
    }
    return resultStr;
};
