'use strict';
var fs = require('fs');
fs.stat('output.md',function (err,stat) {
  if(err) {
    console.log(err);
  } else {
  	console.log("-------------"+stat);
    console.log("isFile" +stat.isFile());
    console.log("isDirectory" +stat.isDirectory());
    if(stat.isFile()) {
      console.log("size:"+stat.size);
      console.log("birth time" +stat.birthtime);
      console.log("modified:"+stat.mtime);
    }
  }
});