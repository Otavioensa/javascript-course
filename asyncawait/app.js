
var async = require('asyncawait/async');
var await = require('asyncawait/await');

function func1(){
    return new Promise(function (fulfill, reject) {
        fulfill(1);
    });
}

function func2(value){
    return new Promise(function (fulfill, reject) {
        fulfill(value + 1);
    });
}

function func3(value){
    return new Promise(function (fulfill, reject) {
        fulfill(value + 2);
    });
}

function func4(value){
    return new Promise(function (fulfill, reject) {
        fulfill(value + 3);
    });
}

function logResults(result) {
  console.log(result);
}

var execFlow = async(function() {
  var result1 = await(func1());
  var result2 = await(func2(result1));
  var result3 = await(func3(result2));
  var result4 = await(func4(result3));
  return logResults(result4);
});

execFlow()
  .catch(function() {
    console.log('Something went wrong');
  });
