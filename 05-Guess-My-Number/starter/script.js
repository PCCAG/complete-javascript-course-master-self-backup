'use strict';
//随机生成1-20的整数
const RandomNamer = function () {
  return Math.trunc(Math.random() * 20);
};
// for (let i = 0; i <= 100; i++) {
//   console.log(RandomNamer());
// }
let number = RandomNamer(); //开局一个随机数
//管理原作弊
console.log(number);
let scores = []; //保存历次分数拿来比较
//初始值
//let result = 'Start guessing...';
//let score = 20;

window.onload = () => {
  document
    .querySelector('button[class="btn check"]')
    .addEventListener('click', () => {
      //Number('')=0
      const GuessNumber = document.querySelector('input.guess').value
        ? document.querySelector('input.guess').value - 0
        : NaN;
      //防止分数为负
      if (Number(document.querySelector('span.score').textContent) > 0) {
        if (GuessNumber === number) {
          //赢了游戏
          document.querySelector('p.message').textContent =
            '💕 Your Guess is right!';
          //展示结果
          document.querySelector('div.number').textContent = `${number}`;
          //管理员作弊
          console.log(number, GuessNumber);
          //改变背景
          document.querySelector('body').style.backgroundColor = 'green';
          //改变结果牌大小
          document.querySelector('div.number').style.padding = '6rem 0rem';
          document.querySelector('div.number').style.width = '19rem';
          //赢了不减分数
        } else if (GuessNumber > number) {
          document.querySelector('p.message').textContent =
            '😂 Your guess is bigger than it.';
          //管理员作弊
          console.log(number, GuessNumber);
          //失败分数减一
          document.querySelector('span.score').textContent = `${
            document.querySelector('span.score').textContent - 1
          }`;
        } else if (GuessNumber < number) {
          document.querySelector('p.message').textContent =
            '🤣 Your guess is lower than it.';
          //管理员作弊
          console.log(number, GuessNumber);
          //失败分数减一
          document.querySelector('span.score').textContent = `${
            document.querySelector('span.score').textContent - 1
          }`;
        } else {
          document.querySelector('p.message').textContent =
            '😅 Please type a number';
          //管理员作弊
          console.log(number, GuessNumber);
        }
      } else {
        document.querySelector('p.message').textContent =
          '👻 You losed already !';
        document.querySelector('body').style.backgroundColor = 'red';
      }

      //console.log(GuessNumber, number);
    });

  document
    .querySelector('button[class="btn again"]')
    .addEventListener('click', () => {
      //把这次分数加入Array中
      //修复小bug,可能会将初始的输入20分,无效分数添加进来( 以及没有赢得比赛的分数)
      if (
        document.querySelector('input.guess').value &&
        document.querySelector('div.number').textContent != '?'
      ) {
        scores.push(document.querySelector('span.score').textContent);
      }
      //重新生成随机数
      number = RandomNamer();
      //重置
      document.querySelector('input.guess').value = '';
      //重置
      document.querySelector('span.score').textContent = '20';
      //scores.push(document.querySelector('span.score').textContent);
      //window.location.reload();
      document.querySelector('div.number').textContent = '?';
      document.querySelector('div.number').style.padding = '3rem 0rem';
      document.querySelector('div.number').style.width = '15rem';
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('p.message').textContent = 'Start guessing...';
      //冒泡排序,从小到大
      scores = BubbleSort(scores);
      //填写当前最高分 继承的数据
      document.querySelector('span.highscore').textContent =
        scores[scores.length - 1];
      console.log(scores);
    });
};

//冒泡排序
function BubbleSort(array) {
  const len = array.length;
  for (let n = 0; n < len; n++) {
    for (let i = 0; i < len - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i], array[i + 1]].reverse();
      }
    }
  }
  return array;
}
