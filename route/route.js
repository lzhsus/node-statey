var http=require('http')
var url=require('url')
var server=http.createServer(function(req,res){
    //设置响应头
    res.writeHead(200,{
        'Content-type':'text/html;charset=utf-8'
    })
    // 第二个参数，true 就可以吧query 变为对象
   var userUrl=url.parse(req.url,true)
   console.log(userUrl)
   if(userUrl.pathname=='/login'){
        res.end('登录名:'+userUrl.query.username+'密码:'+userUrl.query.password)
   }
    res.end()
})
server.listen(3000,'127.0.0.1')