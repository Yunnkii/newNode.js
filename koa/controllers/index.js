//controllers 文件夹下包含的是处理函数
var fn_index = async(ctx,next)=>{
    ctx.response.body = `<h1>Index</h1><form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
        </form>`
};
//在 / 目录下填写、提交表单之后，会跳转到/signin的目录下，调用下面的方法进行验证，还在signin目录下返回
var fn_sigin = async(ctx,next)=>{
    //name 和password 是根据 form  中的 name 定的
    var name = ctx.request.body.name||'',
        password = ctx.request.body.password||'';
    if(name==='koa'&& password==='123') {
        ctx.response.body = '<h1>welcome ${name}</h1>' ;
    } else {
        ctx.resposne.body = `<h1>login failed</h1>
                            <p><a href=''>Try again</a></p>`
    }
};

//以对象的形式导出
module.exports = {
    'GET /':fn_index,
    'POST /sigin':fn_sigin
};