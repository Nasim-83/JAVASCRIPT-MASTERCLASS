let names=[`nasim`,`shaikh`,`nas`]
// console.log(names)

//simple index printing
// console.log(names[0])
// console.log(names[1])
// console.log(names[2])


//for loop 
for(let index=0;index<names.length;index++)
{
    console.log(names[index])
}


console.log("*".repeat(20))

for(const x of names)
{
    console.log(x)
}
console.log("*".repeat(20))


for (let z in names)//in will give you key and not value
{
    console.log(z)
}

console.log(names["1"])


//function call

// function add(num1,num2){
//     console.log(num1+num2)
// }

// add(10,20)