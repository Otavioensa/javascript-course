
  var util = require('util');

  function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
  }

  Person.prototype.greet = function () {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
  };

  function Policeman() {
    this.badgenumber = '1234';
    Person.apply(this);
  }

  util.inherits(Policeman, Person);

  var officer = new Policeman();
  officer.greet();
