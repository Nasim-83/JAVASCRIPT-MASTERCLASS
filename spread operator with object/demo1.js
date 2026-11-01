const data={
    name:'nasim',
    age:20
}

const data2=data
console.log(data)
console.log(data2)

data.name='shaikh'
console.log(data)
console.log(data2)


//spread oprator

console.log("**************")
const data3={...data}
console.log(data)
console.log(data3)
data.age=40
console.log(data)
console.log(data3)