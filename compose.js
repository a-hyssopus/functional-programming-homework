let arr = [1, 2, 3, 42];

const filterEven = array => array.filter(el => !(el % 2))

const multiplyByThree = array => array.map(el => el * 3);

const sumElementsInArray = array => array.reduce((acc, currVal) => acc + currVal);

const compose = (...functions) => array => {
    return functions.reduceRight((g, f) => f(g), array);
}

console.log(compose(sumElementsInArray, filterEven, multiplyByThree)(arr));
