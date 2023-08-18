"use strict";

const [DolphinsScores, KoalasScores] = [
  [85, 54, 41],
  [23, 34, 27],
];

function calcAverage(Scores) {
  let sum = 0;
  for (let i of Scores) {
    sum += i;
  }
  return sum / Scores.length;
}

function checkWinner(AScores, BScores) {
  const [AScoresAverage, BScoresAverage] = [
    calcAverage(AScores),
    calcAverage(BScores),
  ];
  if (
    !(
      AScoresAverage >= BScoresAverage * 2 ||
      BScoresAverage >= AScoresAverage * 2
    ) ||
    AScoresAverage === BScoresAverage * 2 ||
    AScoresAverage * 2 === BScoresAverage
  ) {
    return `Not term wins`;
  } else if (AScoresAverage >= BScoresAverage * 2) {
    return `A term win (${AScoresAverage} vs. ${BScoresAverage})`;
  } else if (BScoresAverage >= AScoresAverage * 2) {
    return `B term win (${BScoresAverage} vs. ${AScoresAverage})`;
  } else {
    return `Not term wins`;
  }
}
console.log(calcAverage(DolphinsScores));
console.log(calcAverage(KoalasScores));
console.log(checkWinner(DolphinsScores, KoalasScores));
