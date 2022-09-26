/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const strArr = s.split('');
    const arr = [];
    for (let i = 0; i < strArr.length; i++) {
        switch (strArr[i]) {
            case '(':
                arr.push(')');
                break;
            case '{':
                arr.push('}');
                break;
            case '[':
                arr.push(']');
                break;
            default:
                if (strArr[i] !== arr.pop()) return false;
        }
    }

    return arr.length === 0;
};
