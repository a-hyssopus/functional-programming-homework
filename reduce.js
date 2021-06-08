// implement map, filter, every, some, indexOf, find using reduce

const arr = [-2, 4, 5, 19, 3];

Array.prototype.customizedMapMethod = function (callback) {
    return this.reduce((acc, element) => {
        acc.push(callback(element));
        return acc;
    }, [])
}

Array.prototype.customizedFilterMethod = function (predicate) {
    return this.reduce((acc, element) => {
        if (predicate(element)) {
            acc.push(element);
        }
        return acc;
    }, [])
}

Array.prototype.customizedSomeMethod = function (predicate) {
    return this.reduce((acc, element) => {
        if (acc === true) return acc;
        else if (predicate(element)) {
            return acc = true;
        } else {
            return acc = false;
        }
    })
}

Array.prototype.customizedEveryMethod = function (predicate) {
    return this.reduce((acc, element) => {
        if (acc === false) return acc;
        else if (predicate(element)) {
            return acc = true;
        } else {
            return acc = false;
        }
    })
}

Array.prototype.customizedIndexOfMethod = function (value) {
    let found = false;

    return this.reduce((acc, element, index) => {
        if (found) {
            return acc;
        } else if (element === value) {
            found = true;
            return acc = index;
        } else {
            return acc = -1;
        }
    })
}

Array.prototype.customFind = function (predicate) {
    let flag = false;

    return this.reduce((acc, element) => {
        if (flag === true) {
            return acc;
        } else if (predicate(element)) {
            flag = true;
            return acc = element;
        } else {
            return acc = undefined;
        }
    })
}

console.log(arr.customizedMapMethod(el => el * 2));
console.log(arr.customizedFilterMethod(el => el > 10));
console.log(arr.customizedSomeMethod(el => el > 10));
console.log(arr.customizedEveryMethod(el => el > 10));
console.log(arr.customizedIndexOfMethod(5));
console.log(arr.customFind(el => el > 0));
