function findLongestSubstring(str) {
    let startIdx = 0;
    let obj = {};
    let maxCnt = 0;
    let curCnt = 0;

    for (let i = startIdx; i < str.length; i++) {
        obj[str[i]] = obj[str[i]] ? ++obj[str[i]] : 1;
        if (obj[str[i]] > 1) {
            startIdx++;
            i = startIdx - 1;
            obj = {};
            curCnt = 0;
        } else {
            curCnt++;
        }

        maxCnt = maxCnt < curCnt ? curCnt : maxCnt;
    }
    return maxCnt;
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('ritschmhool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
