//adding arr in one another

const arr=[10,20,30]
const arr1=['chrome','firfox','edge']

console.log(...arr,...arr1)

const result=[arr1,arr]
console.log(result)

function add(a,b,c)
{
    console.log(a+b+c)
}

const num=[10,20,30]
add(num[0],num[1],num[2])

add(...num)