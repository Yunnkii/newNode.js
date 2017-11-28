
//用于熟悉在url 中的参数的解析的形式
var fn_hello = async(ctx,next)=>{
    var name = ctx.params.name;
    ctx.response.body = '<h1>Welcome ${name}</h1>'
};

module.exports = {
    //参数前面有个:
    'GET /hello/:name':fn_hello
};