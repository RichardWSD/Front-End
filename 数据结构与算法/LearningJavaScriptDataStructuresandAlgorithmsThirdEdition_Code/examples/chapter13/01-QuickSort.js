const { quickSort } = PacktDataStructuresAlgorithms;

function createNonSortedArray() {
  const array = [];
  for (let i = 5; i > 0; i--) {
    array.push(i);
  }
  return array;
}

// const array = quickSort(createNonSortedArray());
// console.log(array);
const arr2 = [2, 4, 3, 8, 7, 5, 6];
const arr3 = [5, 3, 3, 1, 2, 3, 2];
const arr4 = [-1, 2, -8, -10];
const arr5 = [2, -1, -3];
console.log(quickSort(arr2));
console.log(quickSort(arr3));
console.log(quickSort(arr4));
console.log(quickSort(arr5));
