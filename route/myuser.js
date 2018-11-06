function User(trpe,a){
    var str=null;
    if(trpe=='login'){
        str+='<h1>登录成功</h1>'
        str+='<p>登录名:'+a.query.a+'</p>'
   }else{
     str+='错误'
   }
return str;
}

module.exports=User;