var chalk = require('chalk')
var maxTime = 1000;

var evenDoubler = function (value, callback){
  var waitTime = Math.floor(Math.random()*(maxTime+1));
  if(value%2){
    setTimeout(function(){
      callback(new Error("Odd input."));
    },waitTime);
  }else{
    setTimeout(function(){
      callback(null,value*2,waitTime);
    },waitTime);
  }
};


var handleResult = function(err,results,time){
  if(err){
    console.log(chalk.red('ERROR:'+err.message));
  }else{
    console.log(chalk.green("The result are:"+ results + "("+ time +")"));
  }
};

evenDoubler(2,handleResult);
evenDoubler(3,handleResult);

console.log(chalk.white('--------------------'));
