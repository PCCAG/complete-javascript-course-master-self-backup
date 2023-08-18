const MarksWeights = 78,
  MarksHeight = 1.69;
const JoinWeights = 92,
  JoinHeight = 1.95;

console.log(MarksHeight, MarksWeights);
console.log(JoinHeight, JoinWeights);

let MarksBMI, JoinBMI;
function calculateBMI(weights, height) {
  return weights / height ** 2;
}
//27.309968138370508 24.194608809993426
MarksBMI = calculateBMI(MarksWeights, MarksHeight);
JoinBMI = calculateBMI(JoinWeights, JoinHeight);
//MarksBMI = MarksWeights / MarksHeight ** 2;
//JoinBMI = JoinWeights / JoinHeight ** 2;

console.log(MarksBMI, JoinBMI);

let markHigherBMI;
markHigherBMI = MarksHeight > JoinHeight;
//false
console.log(markHigherBMI);

//字符串模板
//字符串格式化和多行字符串用 ``(键盘左上角~键)包裹字符串
console.log(
  `Mark is tall ${MarksHeight},weight ${MarksWeights},MarkMBI:${MarksBMI}`
);
console.log(`String
multiple
lines`);

//字符串与数字可直接联合
console.log("PI: " + 3.1415926535);
