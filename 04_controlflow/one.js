
// //>,<,>=,<=,==,===,!=,!==

// const isloggedin=true;
// const temp=41
// if(temp>40){
//     console.log("it is hot outside");

// }
// else{
//     console.log("it is not hot");
// }
// console.log("ëxecuted")

// const score=200
// if(score>=200){
//     const power="fly";
//     console.log(`super power ${power}`);
    
// }
// else{
//     const power="invisibility";
// }
// // console.log(`super power ${power}`); //error power is not defined

// const balance=1000
// if(balance<500){
//     console.log("balance less than 500");
    
// }
// else if(balance<750){
//     console.log("balance less than 750");
// }
// else if(balance<1000){
//     console.log("balance less than 1000");
// }
// else{
//     console.log("balance is 1000 or more");
// }

const isuserloggedIn=true
const debitcard=true
const googleloggedin=false
const emailloggedin=true

if(isuserloggedIn && debitcard){
    console.log("you can make a purchase");
}

if(googleloggedin || emailloggedin){
    console.log("user logged in");
}
