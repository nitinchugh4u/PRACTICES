console.log(a);
var a;
console.log(a);
var b=100;

function add() {
  var a = 20;
  console.log(a);
  var a=40;
  console.log(a);
}
add();
console.log(a);

{
    var b =80;
}

console.log(b);

//  var is having functional scope
// var variable are getting hoisted
// we can access it before initialisation shows undefined
