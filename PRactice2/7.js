
// function add(){
//     console.log(arguments);


// }
// add(1,2,3,4,5)



// const add2 =()=>{
//     console.log(add2);
//     // console.log(arguments);

// }

// add2(1,2,3,4,5)



const  object = {
    value: "10",
    getValue: function(){
        console.log(this.value)

    } 


}

object.getValue()





const obj1 = {
    value1:"20",
    getvalue1: ()=>{
        console.log(this.value1)

    }
    

}

obj1.getvalue1()


