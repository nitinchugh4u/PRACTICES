function Counter(){
    var count =0;
    
    this.incrementCounter = function (){
        count++
        console.log(count);

    }

    this.decrementCounter = function (){
        count--;
        console.log(count);
    }
    

}

let store = new Counter()
store.incrementCounter()
store.incrementCounter()
store.decrementCounter()


// we created a new counter to  a constructore function 
