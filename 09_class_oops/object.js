function multiplyby5(num){
    return num*5
}

multiplyby5.power=8
console.log(multiplyby5(5))
console.log(multiplyby5.power)
console.log(multiplyby5.prototype)


function chaitapri(chainaam,price,availability){
    this.chainaam=chainaam
    this.price=price
    this.availability=availability
}

chaitapri.prototype.increment=function(){
    this.price++
}
chaitapri.prototype.readymsg=function(){
    if(this.availability){
        console.log(`your ${this.chainaam} is ready sirrr`);
    }
    else{
        console.log(`your ${this.chainaam} is not availaible`);
    }
    
    
}
const user1=new chaitapri("maccha",250,false)
const user2=new chaitapri("masala chai",30,true)
console.log(user1);
console.log(user2);
user1.readymsg()
user2.readymsg()
user1.increment()
console.log(user1);


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

