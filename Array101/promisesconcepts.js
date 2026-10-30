const random =new Promise((resolve,reject) => {
    
    setTimeout( ()=>{
        const randomnumbergenerator=Math.random();
        if(randomnumbergenerator>0.5)
        {
            resolve(randomnumbergenerator)
        }
        else{
            reject(new Error("the number is small"))
        }


    },500)
});

random
.then(result =>{
    console.log("promise is fulfilled with value",result)})
.catch(error=>{
    console.log("promise is rejected with error:",error)
});

