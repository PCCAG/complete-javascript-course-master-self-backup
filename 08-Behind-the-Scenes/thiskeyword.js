"use strict";

if (0) {
  function Jss() {
    const BirthYear = 2003;
    const Gender = "Male";
    console.log(this); //undefined

    const head = {
      haircolor: "red",
      info: function () {
        console.log(`haircolor: ${this.haircolor}`); //haircolor: red
      },
    };
    head.info();
  }

  Jss();
  console.log(Jss); //[Function: Jss]
  //TypeError: Cannot read properties of undefined (reading 'BirthYear')
  console.log("_____________________________________");
}

if (0) {
  this.color = "green";
  this.width = 12;
  this.style = "soft";
  console.log(this.color);
  const drawer = {
    color: "red",
    width: 3,
    style: "solid",
    init: () => {
      //object中使用箭头函数定义方法与普通函数定义方法的区别 这里是使用了父Scope的this 即全局 或者window(浏览器中)
      console.log(this.color, this.width, this.style);
    },
    info: function () {
      console.log(this.color, this.width, this.style);
      const init = () => {
        //object中使用箭头函数定义方法与普通函数定义方法的区别 这里是使用了父Scope的this 即 drawer
        console.log(this.color, this.width, this.style); //red 3 solid
      };
      init();
    },
  };
  drawer.init(); //undefined undefined undefined  green 12 soft
  drawer.info(); //red 3 solid
  console.log(this); //{ color: 'green' } { color: 'green', width: 12, style: 'soft' }
  // { color: 'green', width: 12, style: 'soft' }
}

console.log(this); //{ color: 'green' } { color: 'green', width: 12, style: 'soft' }
// { color: 'green', width: 12, style: 'soft' }

//arguments 关键字
{
  function test() {
    return arguments;
  }
  console.log(typeof test(1, 2, 3, 4, 5, 6, 7, 7)); //object
  console.log(test(1, 2, 3, 4, 5, 6, 7, 7)); //object
  //   [Arguments] {
  //   '0': 1,
  //   '1': 2,
  //   '2': 3,
  //   '3': 4,
  //   '4': 5,
  //   '5': 6,
  //   '6': 7,
  //   '7': 7
  // }
  console.log(test(1, 2, 3, 4, 5, 6, 7, 7)["1"]); //object 2
  console.log(test(1, 2, 3, 4, 5, 6, 7, 7)["8"]); //undefined 超过参数为
}
