// object destructirng taking care of properties of object
// array destructuring will take care of value  of array 
//{}--object and [] for arrays


const arr=['nasim',101,'shaikh','naaa']
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log("*".repeat(20))

//destructuring

const [aa,aaa,bb,ee]=arr

console.log(aa,aaa,bb,ee)

const [bbb,,ccc] =arr
console.log(bbb,ccc)


//default value for array destructing
console.log("$".repeat(20))
const data1=['chrome','explorar']
const[ch,ff='firfox']=data1
console.log(ch,ff)
