'use strict';
var fs = require('fs');

var rs = fs.createReadStream('../readme.md','utf-8');
rs.on('data',function (chunk) {
	console.log("data: "+chunk);
});
rs.on('end',function () {
	console.log("end");
});
rs.on('err',function (err) {
	console.log("error: "+err);
})