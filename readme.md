### nodejs

#### 模块

为什么用模块

为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里，这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。在Node环境中，一个.js文件就称之为一个模块（module）

最大的好处是大大提高了代码的可维护性。其次，编写代码不必从零开始。当一个模块编写完毕，就可以被其他地方引用。我们在编写程序的时候，也经常引用其他模块，包括Node内置的模块和来自第三方的模块

> 就是可以使用第三方模块，简单方便



说明：

这种模块加载机制被称为CommonJS规范，这种规范下，每个js文件都是一个模块，内部使用的变量名和函数名不会冲突。

一个模块想要对外暴露变量（函数也是变量），可以用`module.exports = variable;`，一个模块要引用其他模块暴露的变量，用`var ref = require('module_name');`就拿到了引用模块的变量

**node.js如何做到的不冲突？**

实现“模块”功能的奥妙就在于JavaScript是一种函数式编程语言，它支持闭包。如果我们把一段JavaScript代码用一个函数包装起来，这段代码的所有“全局”变量就变成了函数内部的局部变量。



node.js会实现代码的包装

原本的代码：

```
var s = "hello" ;
var name = "Helin";
console.log(s+name);
```

node.js加载了该js文件后，可以对他进行包装

```
(function (){
  var s = "hello" ;
  var name = "Helin";
  console.log(s+name);
})()
```

在一个立即执行的匿名函数内部，这样，每次加载一个模块就会封装在一个匿名函数的内部，实现了模块的隔离。



#### fs模块

fs模块用来读取文件

异步读：

```
var fs = require('fs');
//异步方式读取；error-first,采用 utf-8 的编码方式读取
//如果出错 err代表一个错误对象，data为undefined 正常读取 error 为null
fs.readFile('readme.md','utf-8',function (err,data) {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
```

读二进制文件

```
var fs = require('fs');
//不传入字符编码的话，data是一个 Buffer对象，node.js中的BUffer 是一个或者多个字节的字节数组（与Array不同）
fs.readFile('sampl.png',function (err,data) {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
    console.log(data.length+'bytes');
  }
})
```

Buffer 可以转换为 string

```
var text = data.toString('utf-8');
```

String 转换成Buffer

```
var buf = Buffer.from(text,'utf-8');
```

同步读：

```
'use strict'
var fs = require('fs');
try{
  	var text = fs.readFileSync('readme.md','utf-8');
	console.log(text);
}catch (e) {
  	console.log(e);
}

```

写文件

```
'use strict'
var fs = require('fs');
var data = "要写的内容" ;
fs.writeFile('output.txt',data,function (err) {
  if(err) {
    console.log(err);
  } else {
    console.log("ok");
  }
});
//同步方法
var g = fs.writeFile('output.md',data);
console.log(g);
```

stat查看文件的详细信息

```
'use strict'
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
//同步函数
fs.statSync();
```

到底使用同步还是异步？（或者说为什么要使用 异步）

node环境执行的javascript 代码是服务器端代码，所以绝大部分需要在服务器运行期反复执行业务业务逻辑的代码，必须使用异步方式，否则，同步代码在执行时期，服务器即将停止响应，因为Javascript 是单线程

服务器启动时如果需要读取配置文件，或者结束时需要写入状态文件时可以使用同步方式，因为这些代码只是在启动时和结束后执行一次，不影响服务器的正常运行时额异步执行。