let promise1 = new Promise((resolve, reject) => {
  resolve(100);
});

let promise2 = new Promise((resolve, reject) => {
  reject(200);
});

let promise3 = new Promise((resolve, reject) => {
  reject(300);
});

async function add() {
  try {
    let result = await promise1;
    console.log("result", result);
  } catch (error) {
    console.log("error", error);
  }
}

async function adddss() {
  try {
    let result = await promise3;
    console.log("result,result");
  } catch (error) {
    console.log("error", error);
  }
}

async function addds() {
  try {
    let result = await promise2;
    console.log("result,result");
  } catch (error) {
    console.log("error", error);
  }

  adddss();
}

add();
addds();
