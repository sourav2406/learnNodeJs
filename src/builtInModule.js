var os = require('os');

var toMb = function(v){
  return (Math.round((v/1024/1024)*100)/100);
};


console.log('HOST: '+os.hostname());
console.log('15 min load average: '+os.loadavg());
console.log(toMb(os.freemem())+' of '+toMb(os.totalmem())+' Mb free');
