var http=require('http')
var url=require('url')
var myuser=require('./myuser')
// console.log(myuser)
http.createServer(function(req,res){
    //设置响应头
    res.writeHead(200,{
        'Content-type':'text/html;charset=utf-8'
    })
    // 第二个参数，true 就可以吧query 变为对象
    if(req.url=='/favicon.ico'){
        return;
    }
 var userUrl=url.parse(req.url,true)
    var pathname=url.parse(req.url).pathname
    //获取 pathname /xxx/xxxxxx scip
    var typ=pathname.substring(1) //,pathname.lastIndexOf('?')
    res.write(myuser(typ,userUrl))
   res.end()
}).listen(3000,'127.0.0.1')