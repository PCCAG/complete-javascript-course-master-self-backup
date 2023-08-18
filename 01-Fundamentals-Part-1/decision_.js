//if 判
//if 内代码块不读取声明 不能创建变量
let species;
if (3 > 4) {
  console.log("SB");
  species = "SB";
  //let mark_test = "test_success";
  //已声明“mark_test”，但从未读取其值。ts(6133)
} else {
  console.log("Normal man");
  species = "Human";
  //let mark_test = "test_success";
  //已声明“mark_test”，但从未读取其值。ts(6133)
}
console.log(species);
//console.log(mark_test);
//ReferenceError: mark_test is not defined
//else if == elif
let age = 12;
if (age <= 10) {
  console.log("死刑");
} else if (age > 10 && age < 18) {
  //& and , | or
  console.log("5年");
} else {
  console.log("三年");
}
