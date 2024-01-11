// Input 1100110

// Output - 0001111
// let str = "1100110"


let str= [1,1,0,0,1,1,0]

function getO(str){
// 1,0,0,1,1,0,1
 let pointer1 = 0
 let pointer2 = str.length-1
//  console.log(pointer1);
//  console.log(pointer2)

while(pointer1<=pointer2){
    // console.log("hello")
    if(str[pointer1]==0 && str[pointer2]==1){
        pointer1++;
        pointer2--;
    }else if(str[pointer1]==1 && str[pointer2]==0){
        //  str[pointer1] = 0
        //  str[pointer2] = 1
       const store1 = str[pointer1]
       const store2 = str[pointer2]

       str[pointer1]= store2;
       str[pointer2]= store1
         pointer1++;
-        pointer2--;

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
