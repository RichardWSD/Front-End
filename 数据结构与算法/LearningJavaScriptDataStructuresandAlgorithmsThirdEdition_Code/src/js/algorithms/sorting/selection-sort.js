import { Compare, defaultCompare, swap } from "../../util";

// 与冒泡排序不同，不会在每次比较的时候调转位置，只会在内部循环结束时交换一次位置
export const selectionSort = (array, compareFn = defaultCompare) => {
  const { length } = array;
  let indexMin;
  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    // wsd
    // for (let j = i; j < length; j++) {
    for (let j = i + 1; j < length; j++) {
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        // console.log('new index min ' + array[j]);
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap(array, i, indexMin);
    }
  }
  return array;
};
