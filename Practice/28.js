const promise = new Promise((resolve, reject) => {
  console.log("hello");
  setTimeout(() => {
    if (false) {
      resolve("20");
    } else {
      reject("40");
    }
  }, 5000);
});
console.log(promise);

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("error", error);
  });
