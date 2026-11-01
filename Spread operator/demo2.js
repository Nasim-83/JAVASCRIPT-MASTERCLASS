// copy of array 

const arr1=[10,20,30]
const arr2=arr1
console.log(arr1)
console.log(arr2)
arr1.push(90)
console.log(arr1)
console.log(arr2)

//using spread operator copy action

console.log("*".repeat(20))
const arr3=[...arr1]
arr1.push(80)
console.log(arr1)

console.log(arr3)
