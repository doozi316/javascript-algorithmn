function reverse(str) {
    if (!str) return '';
    return str.slice(str.length - 1) + reverse(str.slice(0, str.length - 1));
}

console.log(reverse('awesome'));
console.log(reverse('rithmnschool'));
