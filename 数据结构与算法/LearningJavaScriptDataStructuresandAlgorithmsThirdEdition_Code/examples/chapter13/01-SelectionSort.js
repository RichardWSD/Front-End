const { bubbleSort } = PacktDataStructuresAlgorithms;

function createNonSortedArray() {
  const array = [];
  for (let i = 5; i > 0; i--) {
    array.push(i);
  }
  return array;
}

const arr2 = [2, 4, 3, 8, 7, 5, 6];

const array = bubbleSort(createNonSortedArray());
console.log(array);
console.log(bubbleSort(arr2));
