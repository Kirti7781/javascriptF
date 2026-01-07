const arr=[]
if(arr){
    console.log("The array is truthy");
} else {
    console.log("The array is falsy");
}
// falsy values in JavaScript are: false, 0, "", null, undefined, and NaN. All other values, including empty arrays and objects, are considered truthy.
// In this case, an empty array is considered truthy, so the output will be "The array is truthy".

const obj={}
if(Object.keys(obj).length === 0){
    console.log("The object is empty");
} else {
    console.log("The object is not empty");
}
// Here, we check if the object has any keys. An empty object will have zero keys, so the output will be "The object is empty".

// Null coalescing operator example
let userInput = null;
let defaultValue = "Default Value";
let finalValue = userInput ?? defaultValue;
console.log(finalValue); // Output: "Default Value"
// The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or undefined. In this case, since userInput is null, finalValue will be assigned defaultValue.

let fv=undefined ?? null
console.log(fv); // Output: null

//ternary operator example
let age = 20;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: "Yes, you can vote."
// The ternary operator evaluates the condition (age >= 18). If it's true, it returns the first value ("Yes, you can vote."), otherwise it returns the second value ("No, you cannot vote.").