let nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

 nestedArray = [
    [1, 2, 3],
    [4, 5, 6, [1,2,3]],
    [7, 8, 9]
  ];

  nestedArray = [
    [1, 2, 3],
    [4, 5, 6, [1,2,3, [4,5,6]]],
    [7, 8, 9]
  ];

 nestedArray = [
    [1, 2, 3],
    [4, 5, 6, [1,2,3]],
    [7, 8, 9]
  ];


let arr = [];
let newArr;
function output(array) {
//   console.log("hey")
//   let arr = [];
//   let newArr;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArr = array[i];
      console.log("hello")
      output(newArr)
    //   output(newArr);
    // output(array[i])
      
    //    console.log("new",newArr)
    //   output(newArr)
      
    //   output()
    //   for (let i = 0; i < newArr.length; i++) {
    //     // console.log("he",newArr[i])
        // arr.push(newArr[i]);
    //   }
    } else {
      arr.push(array[i]);
    }
  }
//   console.log(arr);
  return arr;
}
console.log("Arrf",arr);

let res = output(nestedArray);
 console.log("res",res)
 console.log(res.length)





// https://github.com/xDAnkit/JavaScriptCodingInterviewQuestions