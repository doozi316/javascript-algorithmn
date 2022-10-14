function fib(num) {
    return recurse(1, 1);

    function recurse(cur, prev) {
        num--;
        if (num === 0) return prev;
        return recurse(cur + prev, cur);
    }
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
