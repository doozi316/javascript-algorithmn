function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    if (!str1 || !str2 || str1.length > str2.length) return false;

    let str1Idx = 0;
    let trueCnt = 0;
    for (let i = 0; i < str2.length; i++) {
        if (str1[str1Idx] === str2[i]) {
            str1Idx++;
            trueCnt++;
        }
    }
    return trueCnt === str1.length;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
