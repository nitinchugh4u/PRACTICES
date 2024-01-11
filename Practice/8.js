let promise1 = new Promise((resolve, reject) => {
  resolve(20);
  console.log("promise1");
});

let promise2 = new Promise((resolve, reject) => {
  reject(50);
  console.log("promise2");

  
});

promise1
  .then((success) => {
    console.log("succes", success);
  })

  .catch((error) => {
    console.log("error", error);
  });

promise2
  .then((succes) => {
    console.log("succes", success);
  })
  .catch((error) => {
    console.log("error", error);
  });

console.log(promise1);
console.log(promise2);



async function asyncF(){
    console.log("execuion start")
    let result = await promise1;
    console.log("result",result)
    console.log("Execution end")
}
asyncF()



async function asyncF2(){
    console.log("execution start2")
    let result1 = await promise1 
    console.log("result1",result1)
    console.log("execution end2")
}
asyncF2()




async function asyncF3(){
    console.log("execution start3")
    // let result1 = await promise2

    try{
        let result1 = await promise2
    console.log("result1yo",result1)
    }
    catch(error){
        // console.log("result1yooo",result1)
        console.log("erroryo",error)
    }
    console.log("execution end3")
}
asyncF3()





