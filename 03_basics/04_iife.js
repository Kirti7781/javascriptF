// Immediately Invoked Function Expression (IIFE)

function chai(){
    console.log(`hello chai peelo`);
    
}
chai();  //normal way

//IIFE way     //named function
(function chai2(){
    console.log(`hello chai peelo`);
})();

//IIFE with arrow function  //namless function
(()=>{console.log(`helllo jii chai peelo`)})();

//IIFE with parameters
((name)=>{console.log(`hello ${name} chaii peelo`)})("kirti")


