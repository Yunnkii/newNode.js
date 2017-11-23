'use strict';

var fs = require('fs');
 var data = "总问" ;
fs.writeFile('output.md',data,function (err) {
  if(err) {
    console.log(err);
  } else {
    console.log("ok");
  }
});