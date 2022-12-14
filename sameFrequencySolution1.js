function sameFrequencySolution1(num1, num2) {
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();
    if (strNum1.length !== strNum2.length) return false;

    let countNum1 = {};
    let countNum2 = {};

    for (let i = 0; i < strNum1.length; i++) {
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
    }

    for (let i = 0; i < strNum2.length; i++) {
        countNum2[strNum1[i]] = (countNum2[strNum2[i]] || 0) + 1;
    }

    for (let key in countNum1) {
        if (countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}
