console.log("start")

 async function add(){
    console.log("1");
    setTimeout(()=>{
        console.log("2")

    },2000)

}
add()

console.log("end");
console.log(add);