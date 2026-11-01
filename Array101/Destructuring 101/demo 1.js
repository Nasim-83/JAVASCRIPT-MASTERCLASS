const data={
name:"nasim",
age:"30",

mainstreet:"newcity",

subaddress:{
    pin:"3444",
    subarea:"landon",
    city:"france"
}

}
console.log(data.name)
console.log(data.age)
console.log(data.mainstreet)
console.log('*'.repeat(20))
let x=data.age
let y=data.name
let z=data.mainstreet
console.log(x,y,z)
console.log('*'.repeat(20))
console.log(data.subaddress.city)

console.log('*'.repeat(20))
//destructing  of the object

const {name:usename, age:myage, mainstreet:addressnew,address='pune'}=data;
console.log(usename,myage,addressnew,address);


const{
subaddress:{
    pin,city
},
name,age
}=data

console.log(pin,city,name,age)