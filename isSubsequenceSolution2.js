function isSubsequenceSolution2(str1, str2) {
    if (str1.length === 0) return true;
    if (str2.length === 0) return false;
    if (str2[0] === str1[0])
        return isSubsequenceSolution2(str1.slice(1), str2.slice(1));
    return isSubsequenceSolution2(str1, str2.slice(1));
}
