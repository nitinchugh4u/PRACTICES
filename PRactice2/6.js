let arr =[1,2,3,4,5]

let store = arr.map((item)=>{
    return item *2;
})
console.log(store);



Array.prototype.myMap = function(cb){
    let array =[]
    for(let i =0; i<this.length; i++){
        array.push(cb(this[i],i,this))

    }
    return array


}

const multiplyBy2 = arr.myMap((item)=>{
    
    return  item*2;
})
console.log("result",multiplyBy2)




// filter 



let filterResult = arr.filter((item)=>{
    return item%2===0
})
console.log("fr",filterResult)

Array.prototype.myFilter = function(cb){
    let Array = []
    for(let i =0; i<this.length; i++){
        if(cb(this[i],i,this)){
            Array.push(this[i])


        }

    }
    return Array

}

const getMyFilter = arr.myFilter((item)=>{
    return item%2===0;
})
console.log("frr",getMyFilter);


// reduce 



let reduceResult =arr.reduce((acc,curr)=>{
   return  acc = acc+curr

},0)

console.log(reduceResult);




Array.prototype.myReduce = function(cb,initialvalue){
    let accumalator = initialvalue !==undefined ? initialvalue : this[0];
    for(let i =initialvalue !==undefined ? 0 : 1 ; i<this.length; i++){
        accumalator = cb(accumalator,this[i],i,this)
    }
    return accumalator;
}

const getReduce = arr.myReduce((acc,curr)=>{
    return  acc+curr;
},0)
console.log(getReduce);



















