var http=require('http')
var url=require('url')

var server=http.createServer(function(req,res){
    //通过回调函数第一个参数req获取请求url
    // 通过req.url()可以获取到url里面的path和query部分内容
    //锚点部分 同样不能被获取到 #login
    // 只针对于icon的获取
    if(req.url=='/favicon.ico'){
        return;
    }
    console.log(req.url)
    // 把req.url获取的地址，进行处理，让他变成一个url对象
    //parse 就是用来出来url字符串，然后转为URL对象
    //然后通过可以获取对应的value值
    var urlObj=url.parse(req.url)
    console.log(urlObj)
    console.log(urlObj.pathname)
    console.log(urlObj.search)
    res.end()
})
server.listen(3000,'127.0.0.1')