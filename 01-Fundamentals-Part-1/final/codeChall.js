const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

function calculateBMI(mass, height) {
  return mass / height ** 2;
}
let markBMI = calculateBMI(massMark, heightMark);
let johnBMI = calculateBMI(massJohn, heightJohn);

if (markBMI > johnBMI) {
  console.log(`Mark' BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
  console.log(`John' BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}
