// call apply and bind

let object1 = {
    names: "nitin",
    city: "delhi",
   
    
}

// object1.callMe()


let printFullname = function(momos,noodles){
    console.log(this.names + "" + this.city +" " + momos +" "+ noodles )
}

printFullname.call(object1,"tandoori  momos","hakka noodles")






let object2 = {
    names: "rahul",
    city: "delhi",
    
    
}

 printFullname.apply(object2,["malai momos", "singapuro noodles"]);

//  bind
let output = printFullname.bind(object1,"afgahni momos","veg noodles")
output()



