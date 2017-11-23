'use strict';
var fs = require('fs');
var rs = fs.createReadStream('output1.txt');
var ws = fs.createWriteStream('output2.txt');
rs.pipe(ws);