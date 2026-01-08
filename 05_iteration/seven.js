//map
const numb=[12,7,34,6,10]
const addednum=numb.map( (num)=> {return num+10})
console.log(addednum)

// chaining

const newnum=numb.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=70)
console.log(newnum)  