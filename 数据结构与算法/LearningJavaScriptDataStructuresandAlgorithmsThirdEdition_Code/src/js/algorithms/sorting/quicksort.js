import { swap } from "../../util";

function partition(array, left, right) {
  const pivotIdx = Math.floor((right + left) / 2);
  const pivot = array[pivotIdx];
  let i = left;
  let j = right;

  while (i < j) {
    while (i < j && array[j] >= pivot) {
      j--;
    }
    while (i < j && array[i] <= pivot) {
      i++;
    }

    if (i < j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  // 例如 5 是 pivot
  // · 2 6 ·· 5 ···
  if (i < pivotIdx) {
    // 例如 i,j 指针在 2 处重合
    if (array[i] < array[pivotIdx]) {
      i += 1;
    }
    swap(array, i, pivotIdx);
  } // ··· 5 ·· 2 6 ·
  else if (i > pivotIdx) {
    // 例如 i,j 指针在 6 处重合
    if (array[i] > array[pivotIdx]) {
      i -= 1;
    }
    swap(array, i, pivotIdx);
  }
  return i;
}
function quick(array, left, right) {
  if (left >= right) {
    return array;
  }
  const index = partition(array, left, right);
  quick(array, left, index - 1);
  quick(array, index + 1, right);
  return array;
}
export function quickSort(array) {
  return quick(array, 0, array.length - 1);
}
