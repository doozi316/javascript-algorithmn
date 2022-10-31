function collectStrings(obj) {
    let result = [];
    if (!Object.keys(obj).length) return obj;
    for (let key in obj) {
        if (typeof obj[key] === 'string') result.push(obj[key]);
        else if (typeof obj[key] === 'object')
            result.push(...collectStrings(obj[key]));
    }

    return result;
}

const obj = {
    stuff: 'foo',
    data: {
        val: {
            thing: {
                info: 'bar',
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: 'baz',
                    },
                },
            },
        },
    },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
