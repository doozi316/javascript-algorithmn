/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let div = 0;
    while ((div + 1) * (div + 1) <= x) {
        div++;
    }
    return div;
};
