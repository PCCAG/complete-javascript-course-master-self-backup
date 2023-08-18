//Windows + . 打开表情符
// ? :符号 三元符号 是一个表达式
// (condional ) ? (statement) : (statement)
// (condional ) ? value : value

/* const bill = [275, 40, 430];
for (const element of bill) {
  console.log(element);
} */
//等效
/* for (let i = 0; i < bill.length; i++) {
  console.log(bill[i]);
} */

const bill = [275, 40, 430];
for (const element of bill) {
  console.log(`When has ${element} bill`);
  let tip =
    element >= 50 && element <= 300
      ? element * (15 / 100)
      : element * (20 / 100);
  console.log(`The tip was ${tip}, and the total value ${tip + element}`);
}
console.log("_________");
{
  const bill = [275, 40, 430];
  for (const element of bill) {
    console.log(`When has ${element} bill`);
    let tip =
      element >= 50 && element <= 300
        ? element * (15 / 100)
        : element * (20 / 100);
    console.log(`The tip was ${tip}, and the total value ${tip + element}`);
  }
}
