"use strict";
//Arrow FUnction
//箭头函数 not get a so-called this keyword
if (1) {
  const number = 20;
  const square = (number) => number ** 2;
  console.log(square(number)); //400

  const n_times_power_function = (number, n) => number ** n;

  console.log(n_times_power_function(number, 4)); //160000
  {
    const n_times_power_function = (number, n) => {
      number++;
      return number ** n;
    };
    console.log(n_times_power_function(number, 4));
  }
}
//anonymous function
//匿名函数
if (1) {
  const number = 20;
  const square = function (number) {
    return number ** 2;
  };
  console.log(square(number)); //400

  const n_times_power_function = function (number, n) {
    return number ** n;
  };

  console.log(n_times_power_function(number, 4)); //160000
}
