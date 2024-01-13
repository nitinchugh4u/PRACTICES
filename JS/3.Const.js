// const is an block scope and we have to decleare as well as initialsise the variable at once
//  we cant change the value of const
// 


const a =20;
console.log(a);

{
    const a =100;
    console.log(a);


}
console.log(a);

function add(){

    const a = 100;
    console.log(a);


}


add()

console.log(a);