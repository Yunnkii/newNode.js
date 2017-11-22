'use strict'
var s = "hello" ;
function sayHai(name) {
	console.log(s+":"+name);
}
//将sayHai作为模块的输出暴露出去，这样其他的模块可以使用该函数
module.exports = {
	sayHai:sayHai
}