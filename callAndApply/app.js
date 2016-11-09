
var object = {
  name: 'John Doe',
  constantValue: 0.5,
  greet: function() {
    console.log(`Hello ${this.name}`);
  },
  sumSomething: function(a, b) {
    console.log(a + b  + this.constantValue);
  }
};

object.greet();

// when I use apply this starts pointing to the object passed in arguments
object.greet.call({
  name: 'Otávio'
});

object.sumSomething(1,2);

// call: if parameters are necessary, just pass them separeted by comas
object.sumSomething.call({ constantValue: 1 },1,2);

// apply: if arameters are necessary, just pass them through arrays
object.sumSomething.apply({ constantValue: 1 },[1,2]);
