function validAnagram(str1, str2) {
    // add whatever parameters you deem necessary - good luck!

    // 길이가 같지 않으면 return false;
    if (str1.length !== str2.length) return false;

    let frequencyObj1 = {};

    for (let char of str1) {
        if (/[a-z0-9]+/gi.test(char)) {
            char = char.toLowerCase();
            frequencyObj1[char] = (frequencyObj1[char] || 0) + 1;
        }
    }

    for (let char of str2) {
        if (!frequencyObj1[char]) return false;
        else return (frequencyObj1[char] -= 1);
    }

    return true;
}
