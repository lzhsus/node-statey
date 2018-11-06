var http=require('http')
var url=require('url')
var fs=require('fs')

http.createServer(function(req,res){
    // 参数 recursive：true 表示递归创建多级文件
    fs.mkdir('./public/zhangsan',{recursive:true},(err)=>{
        res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
        if(err){
            res.end('创建失败')
        }else{
            res.end('创建成功')
        }
    })

}).listen(3000,'127.0.0.1')