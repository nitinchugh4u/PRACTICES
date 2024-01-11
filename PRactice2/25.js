// Input 1100110
// Output - 0001111

let input = "1100110"


function getOutput(input){
    let one = ""
    let zero = ""
    // let res = ""
    for(let i =0; i<input.length; i++){
        if(input[i]==="1"){
            one = one + input[i]
            

        }else{
            zero = zero+ input[i]

        }

    }
    // res =   zero + one
    // return res
    return zero + one


}

let x = getOutput(input)
console.log(x)





let input1 = "1100110"


function ouput(){
    let str = ""

for(let i=0; i<input1.length; i++){

    if(input1[i]==="1"){
        str = str + "0"
    }
    else{
        str = str + "1";
        

}
}

return str
}

// let y = ouput()
// console.log("y",y);


// function callme(){
// for(let i =0; i<input1.length; i++){
//     if(input1[i]===1){
//       let x =  input1.pop(input[i])
//       console.log(x);
//     }
    

// }
// }

// callme()







// Input 1100110
// Output - 0001111

// push
// pop
// splice
// slice
//  


// let input = ""













