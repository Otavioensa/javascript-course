
  var eventConfig = require('./config').events;
  var Emiter = require('events');
  var emiter = new Emiter();

  emiter.on(eventConfig.GREET, () => {
    console.log('Somewhere, someone said hello');
  });

  emiter.on(eventConfig.GREET, () => {
    console.log('A greeeting occured');
  });

  console.log('It\'s about to happen');

  emiter.emit(eventConfig.GREET);
