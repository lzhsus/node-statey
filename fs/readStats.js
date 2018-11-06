var http=require('http')
var url=require('url')
var fs=require('fs')

http.createServer(function(req,res){
    res.writeHead(200,{'Content':'text/html;charset=utf-8'})
    fs.stat('./dir/',(err,fiels)=>{
        console.log(fiels)
        res.end(fiels)
    })
}).listen(3000,'127.0.0.1')