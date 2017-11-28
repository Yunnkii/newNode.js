// koa2 中，这里导入的是一个类
const Koa  = require('koa');
//处理post 请求的ctx.request.body，因为默认的node.js 不能处理 Post 请求的 ctx.request.body
const bodyparser = require('koa-bodyparser');
//处理url 对客户端发来的url进行解析，原本必须用ctx.request.path的方式对不同的请求路径对应不同的处理函数，太过繁琐
const router = require('koa-router');
// 创建一个koa 对象，表示 webapp 本身
const app = new Koa();

//对于任何请求，app 将调用该异步函数处理请求
//这里使用的是 es6的语法 箭头函数
//ctx 是封装了req和res 的变量，next 是koa 传入的将要处理的下一个异步函数
//主要执行逻辑
app.use(async (ctx,next) =>{
	//先处理一下下一个异步函数
	await next();
	//再设置响应
	ctx.response.type = 'text/html';
	ctx.response.body = "<h1>hello world</h1>"
});

app.listen(3000);
console.log("app is listening at port 3000......");