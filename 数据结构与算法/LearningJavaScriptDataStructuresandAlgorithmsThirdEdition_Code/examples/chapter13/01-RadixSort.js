const { radixSort } = PacktDataStructuresAlgorithms;

function createNonSortedArray() {
  const array = [];
  for (let i = 5; i > 0; i--) {
    array.push(i);
  }
  return array;
}

const arr = [30, 122, 211];
const arr2 = [-3, -29, 233, 335, 42];

const array = radixSort(createNonSortedArray());
console.log(array);
console.log(radixSort(arr));
console.log(radixSort(arr2));
