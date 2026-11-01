function printUser(info)
{
console.log(info.id)
console.log(info.name)
}
const info={
id:53907,
name:'nasim'

}

printUser();


//destructuring function parameter


function printUser2({id,name})
{
console.log(id,name)

}
printUser2()