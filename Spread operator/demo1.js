//spread operator  is ...
//it's use to expand value of arrays or string or properties of object


const arr=[10,20,100]
for(let x of arr)
{
    console.log(x)
}
console.log('*'.repeat(10))
arr.forEach((value)=>
    console.log(value)
)

//spread operator
console.log("*".repeat(10))
console.log(...arr)