/* TWO DATATYPES
PRIMITIVE
----> 7types
1)String 2)Numbers 3)Boolean 4)Symbol 5)Null 6)Undefined 7)Bigint

NON PRIMITIVE
---->3types
1)array 2)object 3)function*/
 
let name="kirti"
let age=22
let isApproved=true
let firstName=null
let lastName=undefined
let idSymbol=Symbol("id")
let bigNumber=1234567890123456789012345678901234567890n
let anotherid=Symbol("id")

console.log(typeof name)          //string
console.log(typeof age)           //number
console.log(typeof isApproved)    //boolean
console.log(typeof firstName)     //object
console.log(typeof lastName)      //undefined
console.log(typeof idSymbol)      //symbol
console.log(typeof bigNumber)     //bigint
console.log(idSymbol===anotherid) //false


//non primitive datatypes
let selectedColors=["red","blue","green"]  //array
console.log(typeof selectedColors)          //object

let person={
    name:"kirti",
    age:22
}                                           //object
console.log(typeof person)                  //object

let greet=function(){                       //function
    console.log("hello world")
}
console.log(typeof greet)                  //function




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(primitive)         heap(non-primitive) 

let name1="kirti"
let name2=name1

name2="kuhu"
console.log(name1)  
console.log(name2)   

let user1={
    namme:"kirti",
    userid:"kirti@gmail.com"
}
let user2=user1
user2.namme="kuhu"
console.log(user1)
console.log(user2)
