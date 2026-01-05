
{
let a=30
const b=20
var c=10
}
console.log(a) //error
console.log(b); //error
console.log(c); //no error hence avoid var

function one(){
    const username="Kirti"
    function two(){
        const website="ÿoutube.com"
        console.log(username);
    }
    // console.log(website); error
    two() 
    
}
one()
// two() error


if(true){
    const username="kirti"
    if(username==="kirti"){
        const website=" youtube.com"
        console.log(username + website);
    }
    // console.log(website); error
}
// console.log(username); error


//++++++++++++++++++++++++++++++++++++++INTERESTING+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
addone(5) //this is fine no error due to function hoisting
function addone(num){
    return num+1
}

addtwo(5) //error due to function expression not hoisted (declared using variable)
const addtwo=function(num){
    return num+2
}


