let object = {
    firstName : "nitin",
    lastName  : "chugh"
}

function fullName(){
    console.log(this.firstName + " " + this.lastName)

}

let output =fullName.bind(object)
// console.log(output)
// output()


// creeate a polphill of bind


Function.prototype.mybind = function (...args){
    // this refer to fullname function
    let obj = this

    return(function(){
        obj.call(args[0])
    })
} 
let output1 = fullName.mybind(object)
// console.log(output1);
// output1()






let obj1 = {
    firstName: "Aarush",
    lastName: "chugh"
}

function fullName2(city,study){
    console.log(this.firstName + " " + this.lastName + " " + city + " " + study )
}

let output2 = fullName2.bind(obj1,"delhi",)
// console.log("output2", output2)
// output2("btech")




Function.prototype.mybind2 = function(...args){
    let obj = this
    params = args.splice(1)
    // console.log("params,",params)

    return(

        function(...args2){
            obj.apply(args[0],[...params, ... args2])
        }
    )

}

// let output3 = fullName2.mybind2(obj1,"delhi")
// console.log("output3",output3);
// output3("btech")








// call
let object4 = {
    firstName: "nitin",
    lastName: "chugh"
}


function Printf(){
    console.log(this.firstName + " " + this.lastName)

}
Printf.call(object4);


Function.prototype.mycall =  function (...args){

    let obj = this;
    t
    


}



Printf.mycall(object4)























