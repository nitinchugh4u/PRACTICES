// call back hell

// cheese
// dough
// pizza

async function cheese(cb) {
  console.log("cheesse function is running");
  setTimeout(() => {
    let Cheese = "🧀";
    console.log("cheese");
    cb(Cheese);
  }, 3000);
}

async function dough(Cheese, cb) {
  console.log("dough function is running");
  setTimeout(() => {
    let Dough = "🍩" + Cheese;
    cb(Dough);
  }, 4000);
}

async function pizza(Dough, cb) {
  console.log("pizza function is running");
  setTimeout(() => {
    let Pizza = "🍕" + Dough;
    cb(Pizza);
  }, 5000);
}

cheese((Cheese) => {
  console.log("cheese", Cheese);
  dough(Cheese, (Dough) => {
    console.log(Dough);
    pizza(Dough, (Pizza) => {
      console.log(Pizza);
    });
  });
});
