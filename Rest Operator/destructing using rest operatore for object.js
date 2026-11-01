const user={
name:'nasim',
age:29,
skill:'automation'

}
//destructuring

const {name,...x}=user
console.log(x)
console.log(name)
console.log(x.age)