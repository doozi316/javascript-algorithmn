/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let obj = {};
    nums.forEach((num) => {
        if (obj[num]) obj[num]++;
        else obj[num] = 1;
    });

    const result = nums.find((num) => obj[num] === 1);
    return result;
};
