const obj=new Object()
obj.id="123abc"
obj.name="Kirti"
obj.loggedIn=false
console.log(obj)

const regularuser={
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Kirti",
            lastname:"Singh"
        }
    }
}
console.log(regularuser.fullname.userfullname.lastname)

const obj1={1:'a',2:'b',3:'c'}
const obj2={4:'a',5:'b',6:'c'}

const mergedObjects={...obj1,...obj2}
console.log(mergedObjects)

const mergedObjects2=Object.assign({},obj1,obj2)
console.log(mergedObjects2)
console.log(obj1)

const mergedObjects3={obj1,obj2}
console.log(mergedObjects3)

// const updatedObject={...obj,id:"456def",loggedIn:true}
// console.log(updatedObject)

const arrobj=[
    {id:1,name:"Kirti"},
    {id:2,name:"Singh"},
    {id:3,name:"Someone"}

]
console.log(arrobj[1].name)

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

console.log(obj.hasOwnProperty("name"))

//==================================OBJECT DISTRUCTURING==========================================================

const course={
    coursename:"JS Bootcamp",
    price:999,
    courseInstructor:"Kirti Singh"
}

const {coursename,price,courseInstructor}=course
console.log(coursename)
console.log(price)
console.log(courseInstructor)

const {coursename:cn,price:pr,courseInstructor:ci}=course
console.log(cn)
console.log(pr)
console.log(ci)


