const promiseone=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("asyn task is complete")
        resolve()

    },1000)
})
promiseone.then(function(){
    console.log("promise consumed")
})


new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("asyn task 2 done");
        resolve()
        
        
    }, 1000);

}).then(()=>{
    console.log("task 2 resolved")
})

const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"kirti",email:"kirti@gmail.com"})
    },1000)

})
promisethree.then(function(user){
    console.log(user)

})

const promisefive=new Promise(function(resolve,reject){
    let error=false
    setTimeout(function(){
        if(!error)
        resolve({username:"kirti",pswd:123})
    else{
        reject("ËRROR:SOMETHING WENT WRONG")
    }
    },1000)

})
promisefive
.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>console.log(username))
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("either resolved or rejected")
})