// call apply and bind

// call

let object = {
    firstName: "nitin",
    lastName: "chugh"
}

function printName(city,study){
    console.log("hello" +" " + this.firstName +" " + this.lastName +" " + "from" + " " + city  +" "  + "doing" +" " + study);
}

printName.call(object,"delhi","btech")




let x = printName.bind(object,"chandigarh","bca")
// console.log(x);
x()

