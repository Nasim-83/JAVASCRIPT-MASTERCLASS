function add(...nos)
{
const result=  nos.reduce(function(total,no)
{
    return total+no
},0)
console.log('final result',nos,'=',result)
}

add(10,20)
add(10,20,30)
add(10,20,30,40)