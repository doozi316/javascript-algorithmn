function areThereDuplicates() {
    const args = [...arguments];
    if (!args) return false;
    let obj = {};
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (obj[arg]) return true;
        else obj[arg] = 1;
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
