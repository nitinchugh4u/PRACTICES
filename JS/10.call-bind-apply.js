// call apply and bind

// call

let obj = {
    firstname: "nitin",
    lastname: "chugh",
    fullname : function(){
        console.log("hello")
        console.log(this);
        console.log(this.firstname)
        console.log(this.lastname)
    }
}
    obj.fullname()


    let obj1 =  {
        firstname: "rahul",
        lastname: "arora"
    }

    function full(){
        console.log(this.firstname);
        console.log(this.lastname)

    }

    full()











    // call

let obj2 = {
    fname:"neha",
    Lname: "arora"
}

function pf(){
    console.log("pf")
    console.log(this.fname + this.Lname)
}

pf.call(obj2)



//  pol of call

Function.prototype.mycall = function(scope){
    scope.key = this
    console.log(scope.key)
    return 

}

pf.mycall(obj2)








