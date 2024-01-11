// data hiding

function  counter(){
 var count = 0;
console.log("hello",count)
 return function inceremenCounter(){
    count++;
    console.log(count);

 }
 
}

let store = counter();
console.log(store)
store()
store()

let store2 = counter()
store2()
store2()
// console.log("outside",count)
