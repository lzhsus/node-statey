// 引入系统模块 直接引入系统模块名
var http=require('http')
// createServer 创建一个server 对象的方法
// 回调函数，用来表示服务器接收到浏览器发过来的请求，
// 接下来对发过来的请求进行处理，响应请求
var server=http.createServer(function(req,res){
    // s设置头部
    res.setHeader('X-F00','test')

    res.writeHead(200,{'content-type':'text/html;charset=utf-8'})
    
    res.write('Node.js')
    
    // end（）可以通知服务器，响应和响应头都已发送完毕，
    // 服务器人为响应的过程应完成
    // 如果不写，就会出现loading这种效果，必须写的方法 
    res.end("Hello weold 还有谁")
})
// 端口的监听
server.listen(3000,'127.0.0.1')
