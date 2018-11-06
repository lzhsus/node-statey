var http=require('http')
var url=require('utl')
var fs=require('fa')
var path=require('path')
var static=require('./static.js')
http.createServer((err,data)=>{
    
    fs.readFile('./'+urlName,(err,data)=>{
        res.end(data)
    })
}).listen(3000,'127.0.0.1')