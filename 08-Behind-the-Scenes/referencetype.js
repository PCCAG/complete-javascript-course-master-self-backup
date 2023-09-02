"use strict";

//js中只有原始的数据类型
//number
//string
//null
//undefined
//symbol
//boolean
//big int.
//const 定义后才不可以改变
//这些定义的变量存在call stack中 叫做原始类型

//object 是 引用类型
//存在heap中 单纯的不同赋值只是加了指针 不复制原object的值
//当原oject改变是,指向object变量的值都是一同改变的
const l = console.log;
const a = [];
const b = a;
l(a);

a.push(1, 2, 3, 4);
l(a); //[ 1, 2, 3, 4 ]
l(typeof a);

l(b); //[ 1, 2, 3, 4 ]
l(a === b); //true
