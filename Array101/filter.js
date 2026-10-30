let number=[0,1,2,3,4,5,6]


let data=number.filter(function(value)
{
    return value>=4
})

console.log(data)



let obj=[{'name':'nasim','id':'101','salary' :2000},

    {'name':'shaikh','id':'201','salary' :5000},
    {'name':'nabi','id':'203','salary' :500}
]

let res=obj.filter(function(obj)
{
    return obj.salary>500
})
console.log(res)