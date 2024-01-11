let promise1 = new Promise((resolve, reject) => {
    resolve(100);
  });
  
  let promise2 = new Promise((resolve, reject) => {
    reject(200);
  });
  
  let promise3 = new Promise((resolve, reject) => {
    reject(300);
  });


async function Asynch(){
    // let result1 =  await promise1;
    // let result2 = await promise2;
    // let result3 = await promise3;

    try{
        let result1 =  await promise1;
        console.log("result1",result1);
    }
    catch(error){
        console.log("error",error)
    }

    try{
        let result1 =  await promise2;
        console.log("result1",result1);
    }
    catch(error){
        console.log("error",error)
    }


    try{
        let result1 =  await promise3;
        console.log("result1",result1);
    }
    catch(error){
        console.log("error",error)
    }




}
Asynch()