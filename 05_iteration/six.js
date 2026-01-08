// for each does not return a value
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.forEach(num => num * 2);
console.log(doubled); // undefined

//filter
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

const oddNumbers = numbers.filter((num) => {
    return num % 2 !== 0}); //return statement needed for multi-line function
console.log(oddNumbers); // [1, 3, 5]