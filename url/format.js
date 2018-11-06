var http=require('http')
var url=require('url')
var server=http.createServer(function(req,res){
    var urlObj={
        protocol:'http',
        // ip 端口
        host:'192.168.0.1:3000',
        query:{
            name:'zhangsan',
            age:'30'
        },
        pathname:'sport',
        //锚点
        hash:'#one'
    }
    //format 把url对象 转为url 字符串
    //format  parse 是相对的
    var obj=url.format(urlObj)
    console.log(obj)
    //返回一个 把from/to 进行一个拼接，然后返回，
    //相当于对路径进行拼接
    var result=url.resolve('http://test.com/','sport')
    console.log(result)
    res.end()
})
server.listen(3000,'127.0.0.1')