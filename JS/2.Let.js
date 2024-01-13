// let variable is block scope and it comes in es6
// let variable are in temeroral dead zone
// we cant acces let variable before initialisation
// they are hoisted but they are the script block  not in global  thatsy we  get the reference error 

console.log(a);
let a
 a = 100;
console.log(a);

{

   let a=500
    console.log(a);
    a=1000; 
    console.log(a);
}

console.log(a);

let b =200;
console.log(b);

function hello(){
    let b = 10

    console.log(b);
}
hello()
console.log(b);





