let promise1 = new Promise((resolve, reject) => {
  console.log("start");
  setTimeout(() => {
    console.log("after 5 second");
  }, 5000);

  console.log("end");

  setTimeout(() => {
    console.log("after 2 second");
  }, 2000);

  resolve(100);
});
console.log(promise1);

promise1.then((data)=>{
    console.log("data",data)

})

