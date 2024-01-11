// promise is an promise of code exexution. it means either the  code exexute or fail to execute 

// A promise is an object representing the  eventual completion or failure of an asynchnous operation

// It returns an object itself

// in promise we have 3 States  

// 1. Pending state - initilay it is is  pending state
// 2. Resolve state - Then change to fulfilled if resolve
// 3. Reject state - change to rejected if reject


// Result

// 1. Initialy - undefined
// 2. Resolve - channge to values  if resolved
// 3. Reject - error when  rejected



let promise1 = new Promise((resolve,reject)=>{
    console.log("1")
})
console.log(promise1);

let promise2 = new Promise((resolve,reject)=>{
console.log("2");
resolve()

})
console.log(promise2);

let promise3 = new Promise((resolve,reject)=>{
    resolve(50)
    console.log("3");
})
console.log(promise3);


let promise4 = new Promise((resolve,reject)=>{
    resolve("Promise is resolve")
    
    console.log("4");
})
console.log(promise4);



let promise5 = new Promise((resolve,reject)=>{

    resolve("Promise is resolve")
    reject()
    
    console.log("5");
})
console.log(promise5);

let promise6 = new Promise((resolve,reject)=>{
    reject()
    
    console.log("6")
})

console.log(promise6)

// will ex in last
promise6.catch((data)=>{  
    console.log("data",data)

})
console.log(promise6)


 let promise7 = new Promise((resolve,reject)=>{
    console.log("7")
     resolve(100)
})
console.log(promise7);

promise7.then((data)=>{
    console.log("data",data);
})
































