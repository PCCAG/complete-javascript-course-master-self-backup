//for loop
{
  //斐波那契数列（Fibonacci sequence） 斐波那契数列 输出前0项
  let a = 1,
    b = 0;
  let result = Array();
  for (let i = 1; i <= 10; i++) {
    //获取前10项
    [a, b] = [b, a + b];
    console.log(b);
    result.push(b);
  }
  //loop array
  for (const i of result) {
    console.log(i);
  }
  //console.log(b);
}
{
  //斐波那契数列（Fibonacci sequence） 斐波那契数列 输出前0项
  let a = 1,
    b = 0;
  let time = 1;
  while (time <= 10) {
    [a, b] = [b, a + b];
    console.log(`NO.${time}:${b}`);
    time++;
  }
}
