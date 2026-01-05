function myname(){
    console.log("My name is Kirti Singh");
}
myname()

function addtwonum(num1,num2){
    return num1+num2
}
const result=addtwonum(5,10);
console.log(result);

function loggeduser(name="Guest"){
    return `${name} just loggd in`
}
console.log(loggeduser());
console.log(loggeduser("Kirti Singh"));

function calculateprice(...price)  //rest operator
{
    return price
}
console.log(calculateprice(200,300,400,500,100));

function calculateprice1(val1,val2,...price)  //rest operator
{
    return price
}
console.log(calculateprice1(200,300,400,500,100));

//object handling in function
const user={
    name:"Laara",
    price:500,
}
function userdetail(anyobj){
    console.log(`User name is ${anyobj.name} and price is ${anyobj.price}`);

}
userdetail(user);
//another way
userdetail({
    name:"Riya",
    price:700,
})

//array handling in function
const fruits=["apple","banana","grapes"];
function returnsecondvaue(getarray){
    return getarray[1];

}
console.log(returnsecondvaue(fruits));
//another way
console.log(returnsecondvaue(["mango","kiwi","orange"]));

