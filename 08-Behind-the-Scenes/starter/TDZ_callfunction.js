'use strict';
const l = console.log;

const [a, b] = [12, 2];

l(a, b);

l(add(a, b)); // OK 14
// l(subtracrt(a, b)); //ReferenceError: Cannot access 'subtracrt' before initialization
// l(multiply(a, b)); //Cannot access 'multiply' before initialization
//l(power(a, b)); //TypeError: power is not a function
l(power, typeof power); //undefined undefined
//var hoising 但是值是undefined
function add(a, b) {
  return a + b;
}

const subtracrt = function (a, b) {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

var power = (a, b) => {
  return a ** b;
};
