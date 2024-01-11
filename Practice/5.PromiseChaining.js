
const myPromise = new Promise((resolve, reject) => {
    // Async operation, e.g., fetching data, performing calculations
    // Resolve when the operation is successful
    // Reject if an error occurs
    if (true){
      resolve('Success data');
    } else {
      reject('Error message');
    }
  });

  async function  anotherAsyncOperation(data){
    console.log("hello",data)
    

  }


  console.log(myPromise);



  myPromise.then((successData) => {
    // Handle successful operation
    console.log("1",successData);
  }).catch((error) => {
    // Handle error
    console.error(error);
  });



  myPromise
  .then((data) => {
    // Perform another async operation based on data
    console.log("2",data);
    return anotherAsyncOperation(data);
  })
  .then((result) => {
    // Handle result of the second operation
    console.log("result",result)
  })
  .catch((error) => {
    console.log(error)
    // Handle any errors in the chain
  });