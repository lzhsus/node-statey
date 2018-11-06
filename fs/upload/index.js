var http=require('http')
var url=require('url')
var fs=require('fs')
var path=require('path')

http.createServer((req,res)=>{
    if(req.url=='/favicon.ico'){
        return;
    }
    // 判断请求的资源
    var urlObj=url.parse(req.url).pathname
  
    var extname=path.extname(urlObj)
    console.log(extname)
    // 获取文件
    fs.readFile('../dir'+urlObj,(err,data)=>{
        // 判断文件是否存在
        if(err){
            // 文件不存 执行页面 404
            fs.readFile('../404.html',(err,data)=>{
                res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
                res.end(data)
            })
        }else{
            // 文件存在  输出
            res.writeHead(200,{'Content-type':getMime(extname)})
            res.end(data)
        }     
    })
 
}).listen(3000,'127.0.0.1')
// 自定义函数 用来判断请求的文件的 后缀类型 ，进行响应头的判断
function getMime(a){
    switch(a){
        case '.txt':
        case '.html':
            return 'text/html;charset=utf-8';
            
        case '.jpg':
        case '.png':
        case '.jfp':
            return 'image/jpg;';
        case '.css':
            return 'text/css';
    }
}