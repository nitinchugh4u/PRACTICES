// call
let object = {
    firstName: "nitin",
    lastName: "chugh",
  };


  
function fullName(city, study) {
    console.log(this.firstName + " " + this.lastName + " " + city + " " + study );
  }

  fullName.call(object,"delhi","btech")


  Function.prototype.mycall = function(scope,...args){
    
    scope._this = this
    scope._this(...args)
    
    

  } 
  fullName.mycall(object,"chandigarh","bca")









  
  function fullNames(city, study) {
    console.log(this.firstName + " " + this.lastName + " " + city + " " + study );
  }

  fullNames.apply(object,["delhi","btech"])




  
  Function.prototype.myapply = function(scope, args){
    
    scope._this = this
    scope._this(...args)
    
    

  } 
  fullNames.myapply(object,["chandigarh","bca"])





