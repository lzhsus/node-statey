// 变量名 与引入模块名相同
// 在引入过程中，会把引入的文件从头
// 到尾执行一次
var module=require('./module')

console.log(module.a)
console.log(module.str)
module.printStr("还有谁")

var Person =require('./Person')

var per=new Person('张三',"20","男")

console.log(per)