'use strict';
var fs = require('fs');
var url = require('url');
var http = require('http');
var path = require('path');

// var workDir = path.resolve('.'); //所在文件夹
// console.log(workDir);
// var filePath = path.join(workDir,"pub",'index.html');//拼接路径
// console.log(filePath);

 //process.argv[0] 程序目录 node.js.exe 的目录，process.argv[1]当前文件的目录，process.argv[2]默认是当前目录
var root = path.resolve(process.argv[2] ||'.');

//在相应的文件夹下监听-----文件夹
console.log(root);

//创建服务器
var server = http.createServer(function (req,res) {
	console.log("没有pathname "+url.parse(req.url));  //[object Object]
	//解析客户端的请求路径
	var pathname = url.parse(req.url).pathname; 
	console.log("有pathname "+pathname); //请求路径 /
	//获得对应的本地文件的路径
	var filepath  = path.join(root,pathname);
	console.log("对应的本地文件路径"+filepath);  //C:\Users\Gaomy\Desktop\nodejs\url&&path\

	//获取文件的状态
	fs.stat(filepath,function (err,stats) {
		//没有报错并且是一个文件的时候
		console.log("stats---"+stats); //[object Object]
		if(!err&& stats.isFile()) {
			console.log('200'+req.url);
			//发送响应
			res.writeHead(200);
			// 将文件流导向res响应
			fs.createReadStream(filepath).pipe(res);
		} else {
			console.log("404"+req.url);
			//发送404，文件不存在
			res.writeHead(404);
			//发送给客户端并结束响应
			res.end("404 not found");
		}
	});


});

server.listen(8080);

console.log(" server is listening at http://127.0.0.1:8080");