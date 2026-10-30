function calculate(a,b,operation)
{
    switch(operation)
    {
        case "add":return a+b;
        case "sub": return a-b;
        case "multi": return a*b;
        default : console.log("invlaid operation ");
    }
}
const result=calculate(10,20,"diuv")

console.log(result)