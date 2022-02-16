
let arr = [3,2,1,5]

function swap(nums, i, j) {
  var temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {   // 从第二个元素开始遍历
      let j = i;
      while (j>0&&nums[j]<nums[j-1]) {     // 将当前元素移动到合适的位置
          swap(nums, j, j-1);
          j--;
      }
  }
}

insertionSort(arr)