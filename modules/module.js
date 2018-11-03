// 暴露一个变量

var a=100;
var str='课工场'

function printStr(st){
    console.log(str+st)
}

// 在运行NOde。js文件过程中，
// 会创建一个exports对象，这个是空对象
console.log(exports)

exports.a=a
// exports.str=str
exports.printStr=printStr;

console.log(exports)
