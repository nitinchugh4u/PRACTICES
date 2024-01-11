// bind

let object = {
    firstName: "nitin",
    lastName: "chugh"
}

function printFullName(city,study,dish){
    console.log("my name is " + " " + this.firstName + " " + this.lastName + " " +"from " + city + " " +" " +"doing" +" " + study + " i like " + dish )
}

let output = printFullName.bind(object,"delhi","btech")
console.log(output);
output("momos")







// polyphiill for bind  method

Function.prototype.myBind = function(){
    
    return 

}

let output2 = printFullName.myBind()
output2()





