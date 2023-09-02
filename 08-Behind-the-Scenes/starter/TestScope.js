'use strict';

function first() {
  const a = 1;
  const secend = function () {
    //避免在块内声明函数，而选择函数赋值表达式
    console.log(a); //OK 1
    const b = 2;
    {
      //console.log(a); // Cannot access 'a' before initialization 优先查找a最近的Scope(本级Scope), 但是调用顺序错了
      //但可以找到上级的b
      let a = 2;
      console.log(b); //OK 2
    }
    console.log(a); //OK 1
    //不要重新赋值参数
    return a + b;
  };
  let c;
  c = secend(c);
  console.log(c); //OK 3

  let d = 4; //嵌套循环环境
  {
    console.log(d); //OK 4
    {
      console.log(d); //OK 4
      {
        //console.log(d); //有d优先查找最近的Scope Hoising 在变量被定义之前可以访问 Cannot access 'd' before initialization
        //let const
        // var d = 8; //无法重新声明块范围变量
        let d = 44;

        console.log(d); //OK 8
      }
    }
  }

  console.log(d); //OK 4
}

first();

console.log('___________________');

function b() {
  const a = 1;
  const b = function () {
    {
      console.log(a); //OK 1
      {
        console.log(a); //OK 1
      }
    }
    const bb = 2;
    console.log(a); //OK 1
    const c = function () {
      const cc = 3;
      console.log(a); //OK 1
    };
    //console.log(cc); //ReferenceError: cc is not defined 找不到的错误

    c();
  };
  // console.log(bb); //ReferenceError: bb is not defined
  b();
}

b();

console.log('__________________________Thrid');

//Hoising
function c() {
  //TDZ
  //Temporal Dead Zone
  console.log(a); //undefined Hoising 访问了定义前的var 变量 饭后 undefined
  //如果a变量不存在返回的是
  //console.log(aa); //ReferenceError: aa is not defined
  // let a = 1; //Cannot access 'a' before initialization
  // const a = 1; //Cannot access 'a' before initialization ReferenceError:\
  var a = 1;
}
c();

console.log('__________________________________');
console.log('2' * '2'); //类型强制
console.log('2' % 3);
