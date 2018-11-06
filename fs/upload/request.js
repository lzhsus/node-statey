var http=require('http')
var url=require('url')
var fs=require('fs')
var path=require('path')

http.createServer((req,res)=>{
    if(req.url=='/favicon.ico'){
        return;
    }
    // 判断请求的资源
    var query=url.parse(req.url,true).query //参数对象
    var fname=query.fname//对应 的参数
    //获取扩展名
    var extname=path.extname(fname)
    fs.readFile('../dir/'+fname,(err,data)=>{
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