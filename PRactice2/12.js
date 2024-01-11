// bind

let object = {
  firstName: "nitin",
  lastName: "chugh",
};

function fullName(city, study, dish) {
  console.log(this.firstName + " " + this.lastName + " " + city + " " + study + " " + dish);
}

const output = fullName.bind(object, "delhi", "btech");
console.log(output);
output("afghani momos");

Function.prototype.mybind = function (scope, ...args) {
  //   console.log("scope",scope)
  //   console.log("args",args)
  scope._this = this;

  return function () {
    scope._this(...args);
    // return function (...innerArgs) {
        // scope._this.apply(scope, [...args, ...innerArgs]);
  };
};

const output2 = fullName.mybind(object, "delhi", "btech");
console.log(output2);
output2("tandoori momos");
