let promise1 = new Promise((resolve, reject) => {
  if (true) {
    resolve(100);
  } else {
    reject(200);
  }
});
console.log(promise1);
promise1
  .then((data) => {
    console.log("data", data);
  })
  .catch((error) => {
    console.log("error", error);
  });

let promise2 = new Promise((resolve, reject) => {
  reject(200);
});
console.log(promise2);

promise2.catch((error) => {
  console.log("error", error);
});


let promise3 = new  Promise((resolve,reject)=>{
    reject(1000)
 })
 promise3.then((data)=>{
    console.log("data",data)

 }).catch((error)=>{
    console.log("error",error)

 })