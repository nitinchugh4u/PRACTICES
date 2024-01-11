// promise

let promise1 = new Promise((resolve, reject) => {
  console.log("1");
});
console.log(promise1);

let promise2 = new Promise((resolve, reject) => {
  resolve(50);
  console.log("2");
});
console.log(promise2);

let promise3 = new Promise((resolve, reject) => {
  reject(30);
  console.log("3");
});
console.log(promise3);

promise3.catch((data)=>{
    console.log("data",data);

})


let promise4 = new Promise((resolve,reject)=>{
    reject(100)
})
console.log(promise4);

promise4.catch((data)=>{
    console.log("data",data);

})
console.log(promise4)






let promise5 = new Promise((resolve,reject)=>{
reject(200)
})
promise5.then((data)=>{
    console.log("data",data);

},(error)=>{
    console.log("error",error)

})
