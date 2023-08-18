//convert type forcedly
//强制类型转换
//+号触发类型强制 字符串加上数字全部组成字符串
console.log("2022" + 6 + 21);
console.log("2022" + "6" + 21);

//but - * / 转换为数字
console.log("23" - "23");
console.log("2" * "44");
console.log("2" + 4);
console.log("88" / "2"); //44
//0
//88
console.log("dd" - "sb"); //NaN //NaN类型依然是number

//automatically convert type
//自动类型转换

//example
console.log("2022" + 6 + 21); //优先类型是字符串
console.log(Number(2022) + 6 + 21); //2049
//Number()转换类型为Number 不改变原值 返回新值

console.log(Number("NaN"), typeof NaN); //NaN number
//NaN类型依然是number

console.log(String(123456), typeof String(123456));
//123456 string

//JavaScript 支持 三种转换 boolean number string

console.log(Boolean(0));

//Booloean 类型转换
// 0  '' undefined null NaN False 转换为 False

console.log(8 % 3); //2
//% 是求余运算

const money = 0;
if (money) {
  //这里发生bool转换
  console.log("rich");
} else {
  console.log("poor");
}

/* let height;
console.log(typeof height); //没有赋值为undefined
if (height) {
  console.log("defined!");
} else {
  console.log("undefined");
} */

let height = true;
/* console.log(typeof height); //没有赋值为undefined
if (height) {
  console.log("defined!");
} else typeof height === Number;
{
  console.log("undefined");
} */
/* if (typeof height === "number") {
  console.log(`typeof height === Number`);
} else;
{
  console.log(`typeof height === "string"`);
}

console.log(typeof height);
 */
