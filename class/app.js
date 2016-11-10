
  'use strict';

  // that's just Syntactic sugar, since it's a function
  // with it's prototype
  class Person {
    constructor(name, lastname) {
      this.name = name;
      this.lastname = lastname;
    }

    greet() {
      console.log(`Hello ${this.name} ${this.lastname}`);
    }
  }

  var p1 = new Person('Otavio', 'Augusto');
  p1.greet();
