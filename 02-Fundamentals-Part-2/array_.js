"use strict";
//log functions
function l(m) {
  console.log(m);
}

if (0) {
  // sourcery skip: use-array-literal
  const a = new Array(1, 2, 3, 4, 5);
  const b = Array(1, 2, 3, 4, 5);
  const c = [1, 2, 3, 4, 5];

  //不等
  console.log(a === b, a == b, a != b);

  //索引 长度 切片
  console.log(a.length, a[0], a[a.length - 1]);
  console.log(a.slice(0, 5)); //[0,5)

  //可以改变某个索引的值 即使是 const定义的 //覆盖了
  a[0] = 100;
  console.log(a); //[ 100, 2, 3, 4, 5 ]
  //但不能
  //a = [1, 23]; //TypeError: Assignment to constant variable.

  //一个array存不同的值
  const d = ["1", 123, "fire", a, b];
  console.log(d); //[ '1', 123, 'fire', [ 100, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ] ]

  //d.push()//Appends new elements to the end of an array, and returns the new length of the array.
}

//array functions
//push
if (1) {
  const arr = [1, 2, 3, 4, 5, 6];
  const a_Length = arr.push(7); //push add an element at the end of original array, and return length of new array
  console.log(arr, a_Length, arr.length); //7  7
  l("push__________________");
}
//unshift
if (1) {
  const arr = [1, 2, 3, 4, 5, 6];
  const a_Length = arr.unshift(7); //unshift add an element at the start of original array, and return length of new array
  console.log(arr, a_Length, arr.length); //7  7
  l("unshift__________________");
}
//pop
if (1) {
  const arr = [1, 2, 3, 4, 5, 6];
  const a_end = arr.pop();
  //Removes the last element from an array and returns it.
  //If the array is empty, undefined is returned and the array is not modified.
  console.log(arr, a_end, arr.length); //[ 1, 2, 3, 4, 5 ] 6 5
  l("pop__________________");
}
//shift
if (1) {
  const arr = [1, 2, 3, 4, 5, 6];
  const a_start = arr.shift();
  //Removes the first element from an array and returns it.
  //If the array is empty, undefined is returned and the array is not modified.
  //If the array is empty, undefined is returned and the array is not modified.
  console.log(arr, a_start, arr.length); //[2, 3, 4, 5 ,6] 1 5
  l("shift__________________");
}
//indexof
if (1) {
  const arr = [1, 2, 3, 4, 5, 6];
  const a_index = arr.indexOf(1);

  console.log(arr, a_index, arr.length); //[1,2, 3, 4, 5 ,6] 0 6
  //[ 1, 2, 3, 4, 5, 6 ] 0 6
  l(arr.indexOf(7)); //-1 if it is not present at array, return -1, instead of its index in the array
  l("indexof__________________");
}
//includes
{
  //Determines whether an array includes a certain element, returning true or false as appropriate.
  let a = [1, 2, 3, 4, 5, 6, 7, 8];
  l(a.includes(1)); //true
  l(a.includes("1")); //false
  l(a[-1]); //undefined // cannot index an element by -1 , which through refer to the last element of the array in Python
  l(a[a.length - 1]);
  l(`includes__________________`);
}
