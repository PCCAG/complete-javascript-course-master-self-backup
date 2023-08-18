// const var

let age;
console.log(age);
age = 21;
console.log(age);
// 用了一次let 后不能用let操作同一个变量
//const 不能更改的变量 常量
//let age = 20;无法重新声明块范围变量“age”。ts(2451)

//const 不能更改的变量 常量 不能重新赋值
const BIRTHYEAR = 20000000;
console.log(BIRTHYEAR);
// BIRTHYEAR = 21; //var_const_.js:14  Uncaught TypeError: Assignment to constant variable.
console.log(BIRTHYEAR);

//必须初始化 "const" 声明。必须有个初始值
//const ESTABLISHDATE;//var_const_.js:17  Uncaught SyntaxError: Missing initializer in const declaration

//var是ES6前定义变量的旧方法
var sheAge = 290;
console.log(sheAge);
sheAge = 300;
console.log(sheAge);
//表面看上去和 let差不多 实际差异大

//let 块作用域
//var 函数作用域

//不用关键字 是一个属性 全局对象
aaaaaa = "dffdfdf";
console.log(aaaaaa);
