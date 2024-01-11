// Input 1100110
// Output - 0001111

// push
// pop
// splice
// slice
//



// 2nd approach
function opt() {
  // console.log("helllooo")
  let str = "1100110";  
  
  let res = "";
  // push pop splice slice
  let arr = [];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    // console.log("yo");
    arr.push(str[i]);
  }
  console.log(arr);
  for (let j = 0; j < arr.length; j++) {
    // console.log("yyyy");
    if (arr[j] == "1") {
      arr.splice(j, 1);
      count++;
      j--;
    } else {
    //   console.log("helklo");
    }
  }
//   console.log(arr);
//   console.log(arr.length);
//   console.log(count);

  for (let i = 0; i < arr.length; i++) {
    res = res + arr[i];
  }
//   console.log("res", res);
  arr.length = count;
  for (let i = 0; i < arr.length; i++) {
    res = res + "1";
  }
//   console.log("res", res);

  return res;
}

let final = opt();
console.log(final);

// console.log(arr);













// approach3


// Input 1100110

// Output - 0001111
// let str = "1100110"


let str= [1,1,0,0,1,1,0]

function getO(str){
// 1,0,0,1,1,0,1
 let pointer1 = 0
 let pointer2 = str.length-1
 console.log(pointer1);
 console.log(pointer2)

while(pointer1<=pointer2){
    console.log("hello")
    if(str[pointer1]==0 && str[pointer2]==1){
        pointer1++;
        pointer2--;
    }else if(str[pointer1]==1 && str[pointer2]==0){
         str[pointer1] = 0
         str[pointer2] = 1
         pointer1++;
         pointer2--;

    }
    else if (str[pointer1]==1 && str[pointer2]==1){
        pointer2--;

    }
    else if (str[pointer1]==0  && str[pointer2]==0){
      pointer1++;

    }
    
}
return str;
}
let store = getO(str)
console.log("store",store)
