'use strict';
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

console.log(BubbleSort([5]));
