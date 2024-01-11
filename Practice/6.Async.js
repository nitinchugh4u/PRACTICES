let  promise1 = new Promise((resolve,reject)=>{
    resolve(100)
    console.log("1000")

})

let  promise2 = new Promise((resolve,reject)=>{
    resolve(200)
    console.log("2000")

})
console.log(promise1);
console.log(promise2);



async  function add(){
    console.log("hello")
   const store = await promise1;
   console.log("store",store);
   console.log("hey");


}

add();
console.log("add",add);



