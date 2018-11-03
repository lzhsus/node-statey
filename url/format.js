var http=require('http')
var url=require('url')
var server=http.createServer(function(req,res){
    var urlObj={
        protocol:'http',
        host:'192.168.0.1:3000',
        query:{
            name:'zhangsan',
            age:'30'
        },
        pathname:'sport',
        hash:'#one'
    }
    // 把url对象 转为url 字符串
    //format  parse 是相对的
    var obj=url.format(urlObj)
    console.log(obj)

    var result=url.resolve('http://test.com/','sport')
    console.log(result)
    res.end()
})
server.listen(3000,'127.0.0.1')