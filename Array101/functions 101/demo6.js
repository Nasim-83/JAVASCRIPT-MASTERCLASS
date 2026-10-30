const greet=function ()
{
    console.log("hello");

}


function executetask(task){
    task();
    console.log("hiiiiiiii")
}

const add=function ()
{
    console.log("in adding function",1+1)

}
executetask(greet);
executetask(add);


const sumof=(a,b)=>{
  // console.log(a+b)
  return a+b;
}
executetask(()=> sumof(2,3));

const multiple=name=>console.log(name*10)
multiple(10)


executetask(()=>
  multiple(20)
   )