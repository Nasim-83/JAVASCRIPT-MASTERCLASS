/*
*module 
!important 
? some comments
*/

 function add(num1,num2)
{
    console.log("Addition",num1+num2)
}
 function sub(num1,num2)
{
    console.log("substraction",num1-num2)
}
 function div(num1,num2)
{
    console.log("div",num1/num2)
}
 function multi(num1,num2)
{
    console.log("multi",num1*num2)
}
const appname='name'

console.log("welcome to calculator")

// add(10,20)
// sub(10,20)
// multi(10,20)
// div(10,20)
function demo()
{
    console.log("hello from demo fun")
}
export default demo
export{
    add,sub,div,multi,appname
}