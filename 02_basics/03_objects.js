//singleton
//Object.create()

//object literal

const mysmb=Symbol("key1")
const JSuser={
    name:"kirti",
    "full name":"Kirti Singh",
    [mysmb]:"mykey1value",
    age:19,
    location:"India",
    email:"kirti@google.com",
    loggedIn:true,
    lastLoginDays:["Monday","Friday"]
}
console.log(JSuser.email)
console.log(JSuser["email"])
console.log(JSuser["full name"])
console.log(JSuser[mysmb])
console.log(typeof JSuser[mysmb]);

JSuser.email="kirti@microsoft.com"
JSuser["full name"]="Kirti Singh Chauhan"
console.log(JSuser);
// Object.freeze(JSuser)
JSuser.email="kirti@amazon.com"

JSuser.greetings=function(){
    console.log("hello JSuser");
}
console.log(JSuser.greetings());

JSuser.greetings2=function(){
    console.log(`hello jsuser ${this.name}`);
    
}
console.log(JSuser.greetings2());




