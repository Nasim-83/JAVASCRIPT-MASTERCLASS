//transformation

const data=[10,20,30]
console.log(data)

//transafprmation of any data or array --> map which takes a annonomous function as a parameter or return result



const info=data.map(function(number){
return number*2;

})
console.log(info)

console.log("*".repeat(20))

const innfo=data.map(number=>number*2)
console.log(innfo)

console.log("*".repeat(20))
data.forEach(function(number){
    return number*2
})

data.forEach((index,value)=> console.log(index,'->',value))


console.log("filter function")

const values=data.filter(value=> value>2)

console.log(values)



console.log("find mathod will find a value from your array")

const da=[{'id':101,'name':'nasim'},{'id':102,'name':'shaikh'}]


const found=da.find(function(value){
    return value.id===102;
})

console.log(found)