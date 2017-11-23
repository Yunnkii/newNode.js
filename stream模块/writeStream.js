'use strict';
var fs = require('fs');
var ws = fs.createWriteStream('output1.txt','utf-8');
ws.write("使用Stream写入文本数据。。。。\n");
ws.write("end");
//写文件完毕
ws.end();
var ws1 = fs.createWriteStream('output2.txt');
var  buf = new Buffer("使用Stream  写入二进制数据",'utf-8')
console.log(buf);
//<Buffer e4 bd bf e7 94 a8 53 74 72 65 61 6d 20 20 e5 86 99 e5 85 a5 e4 ba 8c e8
//bf 9b e5 88 b6 e6 95 b0 e6 8d ae>

ws1.write(new Buffer("使用Stream  写入二进制数据",'utf-8'));
ws1.write(new Buffer('end','utf-8'));
ws1.end();