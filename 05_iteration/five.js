//for each
let colors = ['red', 'green', 'blue', 'yellow']
colors.forEach( function (item){
    console.log(item);
})

colors.forEach( (item) => {
    console.log(item);
})

function printme(items){
    console.log(items);

}
colors.forEach(printme);

colors.forEach( (item, index,arr) => {
    console.log(`the item at index ${index} is ${item} in array ${arr}`);
})

const mycoding=[
    {
    languageName:'javascript',
    languageFile:"js"
},
    {
    languageName:'C++',
    languageFile:"cpp"
}

]

mycoding.forEach( (items)=>{
    console.log(`the language name is ${items.languageName} and file extension is ${items.languageFile}`);
})