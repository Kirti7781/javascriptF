// const user={
//     username:"kirti",
//     pswd:"1234",
//     getuserdetail:function(){
//         console.log(`username is ${this.username}`)
//         console.log(this);
        

//     }

// }
// console.log(`username is ${user.username}`)
// console.log(`username is ${user.getuserdetail()}`)
// console.log(this);




function usser(username,pswd,isloggedin){
    this.username=username
    this.pswd=pswd
    this.isloggedin=isloggedin

    this.greeting=function(){
        console.log(`hello jii ${username}`);
        
    }



    return this


}
const userone=new usser("kirti",123,true)
const usertwo=new usser("kiui",1243,false)  //new keyword dena hoga warna overwrite krega

console.log(userone.constructor);
console.log(usertwo);
// new keyword creates empty object called instance
// it calls constructor function
// packs all the arguments like this etc
// gives us

