// https://github.com/xDAnkit/JavaScriptCodingInterviewQuestions
// Remove Duplicate characters from String

let str = "nnniiittttiiiinnnn";

// output ="nit"

str = "nnniiittttiiiinnnn";

function getOutput(str) {
  //   let arr = str.split("");
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      } else {
      }
    }
  }
//   console.log("arr", arr);
  let newStr = "";
  for (let i = 0; i < arr.length; i++) {
    newStr = newStr + arr[i];
  }
  return newStr;
}

// const output = getOutput(str);
// console.log(output);
// console.log(typeof output);








function getOutput2(str) {
      let arr = str.split("");
   
    
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1);
          j--;
        } else {
        }
      }
    }
    console.log("arr", arr);
 return res = arr.join("")

  }
  
//   const output2 = getOutput2(str);
//   console.log(output2)
//   console.log(typeof (output2))






// let object ={
//     : "n",
//     college: "i",
//     school: "t",
// }

// let f = object.5 + object.college + object.school
// console.log("f",f)







