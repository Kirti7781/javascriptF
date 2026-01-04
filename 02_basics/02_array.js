const marvel_heros=['ironman','hulk','spiderman']
const dc_heros=['batman','superman','flash']
marvel_heros.push(dc_heros)
console.log(marvel_heros);

const allheors=marvel_heros.concat(dc_heros)
console.log(allheors);

const allheors2=[...marvel_heros,...dc_heros]
console.log(allheors2);

const num=[1,2,3,[4,5,3],[5,6,[4,5]]]
console.log(num.flat(Infinity));

console.log(Array.isArray("Kirti"));
console.log(Array.from("Kirti"));
console.log(Array.from({name: "Kirti"}));


const score1=200
const score2=400
const score3=150
const score4=50

console.log(Array.of(score1,score2,score3,score4));



