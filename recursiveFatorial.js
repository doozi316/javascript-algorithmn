function recursiveFatorial(num) {
    if (num === 1) return 1;
    return num * recursiveFatorial(num - 1);
}

console.log(recursiveFatorial(3));
