const myarr=[0,2,3,1,4]
const heroes=["shaktiman","naagraj"]

const myarr2=new Array(5,4,6,88)
console.log(myarr[2])
console.log(heroes.length);
 myarr.push(5)
console.log(myarr);
myarr.push(78)
myarr.pop()
console.log(myarr);

console.log(myarr.shift());
myarr.unshift(99)
console.log(myarr);

console.log(myarr.includes(31));
console.log(myarr.indexOf(3));

const newarr=myarr.join();
console.log(newarr);
console.log(typeof newarr);
const newarr2=myarr.join(" * ");
console.log(newarr2);

// slice and splice

const meraarr=[2,3,1,4,5,6,77,65]
console.log('A' ,meraarr)

const myna=meraarr.slice(2,5)
console.log(myna)
console.log('B' ,meraarr)

const myna2=meraarr.splice(2,5)
console.log(myna2)
console.log('C' ,meraarr)



