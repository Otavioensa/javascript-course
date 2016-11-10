  var config = require('./config');

  var greet = function() {
    console.log(config.es);
  };

  module.exports = greet;
