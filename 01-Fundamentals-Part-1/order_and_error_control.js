//语句块
/* var x = 1;
{
  var x = 2;
} */
{
  let x = 0;
  while (x < 10) {
    x++;
    console.info(x);
  }
}

//数组 Array
//creat Array 三种等效
let arr2 = [1, 2, 3, 4, 5, 6];
// sourcery skip: use-array-literal
let arr3 = new Array(1, 2, 34, 5, 6, 7);
let arr1 = Array(1, 2, 3, 4, 5, 6, 7);
console.info(arr2, typeof arr2); //(7) [1, 2, 3, 4, 5, 6, 7] object

console.info(arr1, typeof arr1); //[ 1, 2, 3, 4, 5, 6 ] //object

//const arr1 = new Array(element0, element1, /* … ,*/ elementN);
//const arr2 = Array(element0, element1, /* … ,*/ elementN);
//const arr3 = [element0, element1, /* … ,*/ elementN];
//创建一个长度不为0,但没有任何元素的数组
// 这种方式...
console.log(`创建一个长度不为0,但没有任何元素的数组`);
{
  let arrayLength = 10;
  const arr1 = new Array(arrayLength);

  // ...与这种方式会形成相同数组
  const arr2 = Array(arrayLength);

  // 这个效果也一样
  const arr3 = [];
  arr3.length = arrayLength;
  console.log(arr1.length);
  console.log(arr2.length);
  console.log(arr3.length);

  console.log(arr1);
  //[ <10 empty items> ]
  //[ <10 empty items> ]
  console.log(arr2);
}

//解构赋值语法是一种 Javascript 表达式。可以将数组中的值或对象的属性取出，赋值给其他变量。
console.log(
  `解构赋值语法是一种 Javascript 表达式。可以将数组中的值或对象的属性取出，赋值给其他变量。`
);
if (0) {
  let a,
    b,
    c,
    d,
    arr = [1, 2, 3];
  [a, b, c, d] = arr;
  console.log(a, b, c, d); //1 2 3 undefined 甚至两边长度不等也可以
  [a, b, c, d] = [1, 2, 3, 4, 5];
  console.log(a, b, c, d);
}

//最基本的语句是用于组合语句的语句块。该块由一对大括号界定：
{
  console.warn(`最基本的语句是用于组合语句的语句块。该块由一对大括号界定：`);
  let a = 1;
  {
    //块内有独立的空间和作用域
    let a = 2;
    console.log(a); //2
    /* 在 ECMAScript 6 标准之前 var 语法，Javascript 没有块作用域。在一个块中引入的变量的作用域是包含函数或脚本，并且设置它们的效果会延续到块之外。换句话说，块语句不定义范围。JavaScript 中的“独立”块会产生与 C 或 Java 中完全不同的结果。示例： */
  }
  console.log(a); //1
}
console.warn(
  `在 ECMAScript 6 标准之前 var 语法，Javascript 没有块作用域。在一个块中引入的变量的作用域是包含函数或脚本，并且设置它们的效果会延续到块之外。换句话说，块语句不定义范围。JavaScript 中的“独立”块会产生与 C 或 Java 中完全不同的结果。`
);
// sourcery skip: avoid-using-var
var x = 1;
{
  var x = 2;
  console.log(x); //2
}
console.log(x); //2

//从 ECMAScript 2015 开始，使用 let 和const变量是块作用域的。

//if 判断
// sourcery skip: use-braces
{
  if (1) console.log(1);

  if (4 > 3) {
    console.log(1);
    console.log(1);
    console.log(1);
  } else {
    console.log(1);
  }
  console.log("__");
  let a = [4, 4];
  if (a.includes(1)) {
    //Determines whether an array includes a certain element, returning true or false as appropriate.
    console.log(1);
  } else if (a.includes(2)) {
    console.log(2);
  } else if (a.includes(3)) {
    console.log(3);
  } else if (a.includes(4)) {
    //a includes 4
    console.log(4);
  } else {
    console.log("other");
  }
}

//switch 语句
{
  let score = 100;
  switch (
    score //单值
  ) {
    case 100: {
      console.log(`满分`);
      console.log("Good");
    }
    //break;//如果不写break 或者退出态 return throw , 当找到一个 case匹配后语句会继续执行下面的条件下的语句
    case 90:
      console.log("优秀");
    //throw "还在执行";
    //break;
    case 70:
      console.log("良好");
    //break;
    case 60:
      console.log("及格");
      break;
    default:
      console.log("不及格");
  }
  /* 满分
  优秀
  良好
  及格
  不及格 */
}

//异常处理语句
{
  let a = 1;
  try {
    a /= K; //Infinity 没有0除错误 还是 number类型
  } catch (e) {
    //throw e;//K is not defined
    console.log(toString(e));
  } finally {
    console.log(`不管出没出错误,赶紧记录已经执行完的`);
    console.log(a, typeof a);
  }
  //console.log(a, typeof a); //number
  console.log("end");
}
