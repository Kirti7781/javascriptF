const userdetails={
    username:"kuhu",
    password:"1243",
    welcomemsg:function(){
        console.log(`welcome ${this.username}`); // could also do userdetails.username
        console.log(this);
        
    }
}
userdetails.welcomemsg();
userdetails.username="kiku"
userdetails.welcomemsg();
console.log(this)


const chai1=function(){
    console.log(this);
}
chai1();

const chai2= ()=>{
    console.log(this); // arrow function does not have its own this
}
chai2();

const chai3=(num1,num2) =>{
    return num1+num2; // explicit return
}
console.log(chai3(3,4));

const sum=(num1,num2) => num1+num2; // implicit return
console.log(sum(5,6));


