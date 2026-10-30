function one(userid,callback)
{
    setTimeout(function(){
    const users= {
        1:{id:1, name:'nasim'},
        2:{id:2, name:'shaikh'}
    }
   const id=users[userid]
   if(id)
   {
    callback(null,id)
   }
   else
   {
    callback("user not sound",null)
   }
   },2000);
}

function callback(error,user){

    if(error)
    {
        console.error("Error :", error)
    }
    else
    {
        console.log("user :", user)
    }
}

one(2,callback)

