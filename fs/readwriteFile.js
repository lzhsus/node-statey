var http=require('http')
var url=require('url')
var fs=require('fs')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
    var path='./public/text'
    // 读取文件夹
    fs.readdir(path,(err,files)=>{
        //文件夹不存在
        if(err){
            // 创建文件夹
            fs.mkdir(path,{recursive:true},(err)=>{
                // 创建失败
                if(err){
                    res.end('文件夹不存在，创建失败')
                    return;
                }
                //创建成功，写入文件
                fs.writeFile(path+'/zoye.txt','使用fx模板实现文件管理','utf-8',(err)=>{
                    if(err){
                        res.end('写入文件失败')
                    }else{
                        //写入成功 读取文件
                        fs.readFile(path+'/zoye.txt',(err,data)=>{
                            res.end(data)
                        })
                    }
                })
            })
        }else{
        //文件夹存在
            fs.writeFile(path+'/zoye.txt','使用fx模板实现文件管理','utf-8',(err)=>{
                if(err){
                    res.end('写入文件失败')
                }else{
                    //写入成功 读取文件
                    fs.readFile(path+'/zoye.txt',(err,data)=>{
                        res.end(data)
                    })
                }
            })
        }

    })

}).listen(3000,'127.0.0.1')