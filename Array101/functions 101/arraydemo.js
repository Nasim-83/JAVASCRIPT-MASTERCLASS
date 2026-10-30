const data=[10,20,30]
console.log(data[1])
console.log(data)


//transformation (array *2)

const result=data.map(function(number)
{
    return number*2;
})

console.log(result)

console.log("***".repeat(20))
function multipler(number)
{
    return number*2;
}
const re=data.map(multipler)
console.log(re)


console.log("/".repeat(20))


const rre=data.map((number) => 
     number*2)

console.log(rre)


///foreach(required call back
console.log("^^^^".repeat(20))

data.forEach(number=>
    console.log(number*2))