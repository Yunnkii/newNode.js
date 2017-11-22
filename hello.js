'use strict'
// var s = "hello" ;
// function sayHai(name) {
// 	console.log(s+":"+name);
// }
//将sayHai作为模块的输出暴露出去，这样其他的模块可以使用该函数
// module.exports = {
// 	sayHai:sayHai
// }
// var fs = require('fs');
// fs.readFile('readme.md','utf-8',function (err,data) {
// 	if(err) {
// 		console.log(err);
// 	} else {
// 		console.log(data);
// 	}
// });
// var fs = require('fs');
// var text = fs.readFileSync('readme.md','utf-8');
// console.log(text);
'use strict';
var fs = require('fs');
 // var data = "总问" ;
// fs.writeFile('output.md',data,function (err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("ok");
//   }
// });
// var g = fs.writeFile('output.md',data);
// console.log(g);
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