// reduce

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

// flattening an array of arrays
const nestedArrays = [[1, 2], [3, 4], [5]];

const flattened = nestedArrays.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(flattened); // Output: [1, 2, 3, 4, 5]

// counting occurrences
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];

const fruitCount = fruits.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log(fruitCount); 
// Output: { apple: 3, banana: 2, orange: 2 }