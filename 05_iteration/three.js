// for of loop

const greeting = "hello world!"
for (const greet of greeting) {
    console.log(greet);
    
}

//map
const mymap=new Map();
mymap.set('name','krtik');
mymap.set('age',21);
mymap.set('role','developer');
mymap.set('name','krtik'); //duplicate key not allowed does not give error but ignore
console.log(mymap);
for (const [key,value] of mymap) {
    console.log(`key is ${key} and value is ${value}`);
    
}
const myobj={
    name:'krtik',
    age:21,
    role:'developer'
}
for (const key in myobj) {
    console.log(`the ${key}  has value  ${myobj[key]}`); //for in loop
    
}
// for (const [key,value] in myobj) {
//     console.log(`the ${key}  has value  ${myobj[key]}`);
    
// } doesnt work for objects

