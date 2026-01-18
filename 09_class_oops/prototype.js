// const name="kirti   "
// console.log(name.length);

// console.log(name.truelength)

// const heros=["hulk","spiderman","thor"]
// const superpower={
//     hulk:"strength",
//     spiderman:"sling",
//     thor:"thunder"
// }

// Object.prototype.kirti=function(){
//     console.log(`aaiyee jii mere heros hai sb mere bnaaye hue`);
    
// }
// Array.prototype.assemble=function(){
//     console.log("heros assemble");
    
// }

// heros.kirti()
// superpower.kirti()
// name.kirti()
// heros.assemble()
// superpower.assemble()

//inheretence
// const teacher={
//     subject:"javascript"
// }
// const teachingsupport={
//     Isfree:true

// }

// //modern syntax
// Object.setPrototypeOf(teacher,teachingsupport)

// console.log(teacher.Isfree)

const newuser="chaiaurcode   "

String.prototype.truelenght=function(){
    console.log(this)
    console.log(`true length is ${this.trim().length}`)
}
newuser.truelenght()
"kirti  ".truelenght()