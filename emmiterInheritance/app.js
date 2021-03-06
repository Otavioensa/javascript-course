
  var EventEmitter = require('events');
  var util = require('util');

  function Greetr() {
    EventEmitter.call(this);
    this.greeeting = 'Someone says:';
  }

  util.inherits(Greetr, EventEmitter);

  Greetr.prototype.greeet = function (data) {
    var logText = `${this.greeeting} ${data}`;
    console.log(logText);
    this.emit('greet', data)
  };

  var greeter1 = new Greetr();

  greeter1.on('greet', (data) => {
    var logText = `Someone greeeted: ${data}`;
    console.log(logText);
  });

  greeter1.greeet('This was a greeting!');

  // greeter1.__proto points to Greetr's prototype
  // greeter1.__proto__.__proto__ points to events prototype
