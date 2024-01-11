function x() {
  var i = 1;

  setTimeout(() => {
    console.log(i);
    console.log("after 2 sec");
  }, 2000);

  console.log("dont wait ");
}

// x();

function y() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
// y();



function z() {
    for (var i = 1; i <= 5; i++) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
  }
//   z();




// beacause the let variable  are block scope   so each and everytime this loop is called
// each and every time the set time out method is call . this function form a closure with
// a new variable itself. this means  the copy of i in each iteration is new  
// frsh new copy of i

// let is a block scope so each time it will create a new copy of i
function z() {
    for (let i = 1; i <= 5; i++) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
  }
//   z();



//  with var also

function z(){
    for(var i =1; i<=5; i++){
        function close(i){
        setTimeout(()=>{
            console.log(i);

        },i*1000)
    }
    close(i)

    }
    console.log("hello")


}
z()




  
  


