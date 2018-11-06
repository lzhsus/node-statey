var http=require('http')
var url=require('url')
var fs=require('fs')

http.createServer(function(req,res){
    //添加响应头

    //这是针对 text/html格式的处理
    // res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
    
    //这是针对图片的
    //清楚 文件的格式或者数据类型，然后设置响应头   
    res.writeHead(200,{'Content-type':'image/jpg'})
    //不在处理小图标的请求
    if(req.url=='/favicon.ico'){
        return;
    }
    //fs.readFile() 文件系统

    //参数1： 设置文件读取的路径 必填
    //参数2： 设置读取的选型，可填可不填,
        //不设置，默认 字节流 buffer二进制返回
        //设置，utf8 
        //buffer:是一种数据类型，代表了缓存区，
        //存储二进制数据，称之为字节流，网络传输的过程中
        //就是通过这样而精致的数据流进行传递
    //参数3： 返回函数，把读取的文件返回

    //读取 txt  
    // fs.readFile('./text.txt','utf8',(err,data)=>{
    //     console.log(data)
    //    res.end(data)
    // })

    //读取图片
    // fs.readFile('./card_xxx1214_09.jpg',(err,data)=>{
        // console.log(data)
    //     res.write('<h1>'+data+'</h1>')
    // })
    fs.readFile('./logo.png',(err,data)=>{
        // console.log(data)
        res.end(data)
    })
    //读取网页
    // fs.readFile('./index.html',(err,data)=>{
    //     res.end(data)
    // })

}).listen(3000,'127.0.0.1')