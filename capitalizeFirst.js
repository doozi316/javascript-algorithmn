function capitalizeFirst(arr) {
    if (!arr.length) return [];
    const str = arr[0];
    return [
        `${str[0].toUpperCase()}${str.slice(1)}`,
        ...capitalizeFirst(arr.slice(1)),
    ];
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
