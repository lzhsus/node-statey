var http=require('http')
var url=require('url')
var fs=require('fs')

http.createServer(function(req,res){
    var path='./dir'
    // 获取一个文件夹文件
    fs.readdir(path,(err1,files)=>{
        if(err1){
            fs.readFile('./404.html',(err,data)=>{         
                res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
                res.end(data)
            })
        }else{
            var str=files[3] //获取的数组文件，文件夹里面的全部内容名称
            fs.readFile(path+'/'+str,(err,data)=>{
                var fileType=str.substring(str.lastIndexOf('.')+1)
                console.log(fileType)
                switch (fileType) {
                    case 'jpg':
                    case 'png':
                    case 'gif':
                        res.writeHead(200,{'Content-type':'image/jpg'})
                        res.end(data)
                        break;
                    case 'html':
                    case 'txt':
                        res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
                        res.end(data)
                        break;

                    default:
                        break;
                }
                res.writeHead(200,{'Content-type':'image/jpg'})
                res.end(data)
                
            })
        } 
    })
}).listen(3000,'127.0.0.1')