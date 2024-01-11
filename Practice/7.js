let promise1 = new Promise((resolve, reject) => {
  resolve(50);
  console.log("success");
});

console.log(promise1);

promise1.then((data) => {
  console.log( data);
});



let promise2 = new Promise((resolve, reject) => {
  reject(100);
});
console.log(promise2);

promise2.catch((data) => {
  console.log(data);
});


async function add(){
    console.log("hello")
    const result = await promise1
    console.log(result);


}
add()


async function adds(){
    console.log("hello")
    const result = await promise1
    console.log(result);


}
adds()


async function  addds(){
    console.log("yo")
    // const result = await promise2
    try{
        const result = await promise2
        console.log("result",result);
    
    }
    catch(error){
        console.log("error",error)

}

}
addds()





async function  addsds(){
    console.log("yo")
    // const result = await promise2
    try{
        const result = await promise1
        console.log("result",result);
    
    }
    catch(error){
        console.log("error",error)

}

}
addsds()



















