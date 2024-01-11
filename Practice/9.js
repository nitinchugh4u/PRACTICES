// promise chaining

let promise1  = new Promise((resolve,reject)=>{
    resolve(100);
})


let promise2  = new Promise((resolve,reject)=>{
    reject(1000);
})


async function asyncF(data){
    console.log(data);
    return 200

}


async function asyncFf(data){
    console.log(data);
    let result = await promise1;
    console.log("result",result)
    return 300

}


async function asyncFff(data){
    console.log(data);
    try{
    let result = await promise2;
    console.log("result",result)
    }
    catch(error){
    // return 500
    console.log("errorrr",error)
    return error;
    }
    
    

}




// let promise2 = new Promise((resolve,reject)=>{
//     reject

// })

promise1.then((data)=>{
    console.log("data",data)
    return asyncF(data)
    

 })
 .then((data)=>{
 console.log("dataa",data)
 return asyncFf(data)

 })


.then((data)=>{
    console.log("dataaa",data)
    return asyncFff(data)

})


.then((data)=>{
    console.log("dataaaaa",data)
    
})
.catch((error)=>{
    console.log("error",error)

})




