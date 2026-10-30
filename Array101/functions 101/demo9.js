const add=function (a,b) {
    return a+b;
}
const Sub=function (a,b) {
    return a-b;}
const multi=function (a,b) {
    return a*b;}



function calculate(aa,bb,operation)
{
   
   return operation(aa+bb)
}
const result=calculate(10,20,Sub)

console.log(result)