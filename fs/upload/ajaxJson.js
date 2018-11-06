var http=require('http')
var url=require('url')
var fs=require('fs')
var path=require('path')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8','Access-Control-Allow-Origin':'*'})
    if(req.url=='/favicon.ico'){
        return;
    }
    // 判断请求的资源

    fs.readFile('./ajax.txt','utf-8',(err,data)=>{
       console.log(data)
        res.end(data)
    })

   
}).listen(3000,'127.0.0.1')
// 自定义函数 用来判断请求的文件的 后缀类型 ，进行响应头的判断
