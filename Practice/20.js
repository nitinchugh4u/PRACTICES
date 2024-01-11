// function outer(x) {
//   var a = 10;

//   function inner() {
//     console.log(a,x);
//   }
//   inner();

//   return inner
// }

// let store = outer("hello world");
// console.log(store);
// store()

// function outer(x) {
//     var a = 10;

//     function inner() {
//       console.log(a,x);
//     }
//     inner();
//     var a =20;
//     return inner
//   }

//   let store = outer("hello world");
//   console.log(store);
//   store()

// function outer(x) {
//     let a = 10;

//     function inner() {
//       console.log(a,x);
//     }
//     inner();
//      a =20;
//     return inner
//   }

//   let store = outer("hello world");
//   console.log(store);
//   store()

// function outer(x) {
//     // let a = 10;

//     function inner() {
//       console.log(a,x);
//     }
//     inner();
//     var a =20;
//     return inner
//   }

//   let store = outer("hello world");
//   console.log(store);
//   store()

// function outer(x) {
//     // let a = 10;

//     function inner() {
//       console.log(a,x);
//     }
//     inner();
//     // let a =20;
//     return inner
//   }

//   let store = outer("hello world");
//   console.log(store);
//   store()

// function outer(x) {
//     // let a = 10;

//     function inner() {
//       console.log(a,x);
//     }
//     inner();
//     var a =20;
//     return inner
//   }

//   let store = outer("hello world");
//   console.log(store);
//   store()

// function outest(x) {
//   function outer() {
//     // let a = 10;

//     function inner() {
//       console.log(a, x);
//     }

//     inner();
//     var a = 20;
//     return inner;
//   }
//   let yo = outer();
//   console.log(yo, "yo");
//   return outer;
// }

// let store = outest("hello world");
// console.log(store);
// store();

function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }

  return outer;
}
// let a = 100;
var close = outest()("helloWorld");
console.log(close);
close();
