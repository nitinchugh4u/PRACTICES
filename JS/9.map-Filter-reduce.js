// Map 

let arr = [1,2,3,4,5,6,7,8]

let  res = arr.map((item)=>{
    
    return item*2
})
console.log(res);



Array.prototype.myMap = function(cb){
    let newArr = []
console.log("this",this)
for(let i =0;i<this.length; i++){
    newArr.push(cb(this[i]))
}
    
    
    
    return newArr;

}

let ress = arr.myMap((item)=>{
    return item*3
})
console.log("ress",ress)




// Filter

let fRes = arr.filter((item)=>{
    return item%2 == 0

})

console.log("fres",fRes);



// pol of filter

Array.prototype.myFilter = function(cb){
    let newfArr=[]
    console.log("thhhhis",this)
    for(let i =0;i<this.length;i++){
        if(cb(this[i])){
        newfArr.push((this[i]))
        }





    }
    
return newfArr

}


let resss = arr.myFilter((item)=>{
    return item %2!==0 

})
console.log(resss)




let redduce = arr.reduce((acc,cur)=>{
    acc = acc+ cur;
    return acc ;

},0)

console.log(redduce);

Array.prototype.myReduce = function(cb,initialvalue){
    let acc = initialvalue;
    for(let i =0; i<this.length; i++){
         acc = acc ? ( cb(acc,this[i])) : (this[0])



    }
    return acc;
    

}


let reddc = arr.myReduce((acc,cur)=>{
    acc = acc+  cur
    return acc

},0)
console.log(reddc);













