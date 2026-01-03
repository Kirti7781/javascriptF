let name="kirti"
let repocount=50
console.log(name + repocount+" babe") //outdated way of writing
console.log(`${name} has ${repocount} babe`)

//another way to declare string

let msg=new String("hello world")
console.log(msg)

console.log(msg[1])
console.log(msg.length)
console.log(msg.toUpperCase())
console.log(msg.includes("world"))

console.log(msg.charAt(3));
console.log(msg.indexOf('l'));
 let sp="   kirti"
 console.log(sp);
 
console.log(sp.trim());


let url="https://www.kirti.com/profile%20details"
console.log(url.replace('%20','-'));

let mymsg="hello-jii-kaise-ho--oyee"
let parts=mymsg.split('-')
console.log(parts)

