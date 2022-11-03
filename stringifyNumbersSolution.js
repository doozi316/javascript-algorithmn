function stringifyNumbersSolution(obj) {
    var newObj = {};
    for (var key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbersSolution(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return new Obj();
}
