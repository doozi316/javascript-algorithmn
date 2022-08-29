function sameFrequency(num1, num2) {
    const num1Str = num1.toString();
    const num2Str = num2.toString();
    if (num1Str.length !== num2Str.length) return false;
    let obj = {};
    for (let i = 0; i < num1Str.length; i++) {
        const numChar = num1Str[i];
        obj[numChar] = (obj[numChar] || 0) + 1;
    }

    for (let i = 0; i < num2Str.length; i++) {
        const numChar = num2Str[i];
        if (!obj[numChar]) return false;
        else obj[numChar] -= 1;
    }
    return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
