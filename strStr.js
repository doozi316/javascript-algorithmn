/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        const compareStr = haystack.slice(i, i + needle.length);
        if (needle === compareStr) return i;
    }

    return -1;
};
