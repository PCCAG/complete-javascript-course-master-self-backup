//js有七种基本数据类型
//js是动态类型语言 不需要声明变量数据类型

//boolean 小写true false
//number
//symbol
//string
//big int
//undefined
//null

let bool1 = true;
console.log(bool1);
//typeof 类型检查关键字
console.log(typeof bool1);
console.log(typeof "送送送"); //string
console.log("'送送送'");

bool1 = false; //动态类型
bool1 = 222345555;
//重新赋值(变量已经存在) 不用let 改变了盒子的内容
console.log(bool1);

let undefinedX;
console.log(undefinedX); //undefined 值 也就是一个没有值的变量
console.log(typeof undefinedX); //undefined 类型

let null1 = null;
console.log(null1, typeof null1);
console.log(typeof null1); //object 类型 被认为是bug 错误

console.log(typeof dddd); //undefined 不存在的也是undefined

console.log("分隔符_______");
