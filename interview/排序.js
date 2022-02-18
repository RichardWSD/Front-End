/*
 * @Author: Richard
 * @Date: 2022-02-16 15:15:16
 * @LastEditTime: 2022-02-18 19:07:23
 * @LastEditors: Richard
 * @Description: 
 *  递归算法空间复杂度：递归深度n*每次递归所要的辅助空间，如果每次递归所需要的辅助空间为常数，则递归空间复杂度o（n）
 *  参考资料：
 *    https://leetcode-cn.com/problems/sort-an-array/solution/shi-er-chong-pai-xu-suan-fa-bao-ni-man-yi-dai-gift/
 *    小灰漫画算法书
 *    维基百科（时间空间复杂度看这个会比较权威）
 */

let arr = [3, 2, 1, 5]

function swap(nums, i, j) {
  var temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

/**
 * @description: 冒泡排序
 * 时间复杂度： O(n^2)
 * 空间复杂度： O(1)
 * @param {*} nums
 * @return {*}
 */
function bubbleSort(nums) {
  for (let i = nums.length - 1; i >= 1; i--) { // 冒泡得到n-1个最大值
    for (let j = 1; j <= i; j++) {
      if (nums[j - 1] > nums[j])
        swap(nums, j, j - 1);           // 交换得到较大值
    }
  }
}

/**
 * @description: 选择排序
 * 时间复杂度： O(n^2)
 * 空间复杂度： O(1)
 * @param {*} nums
 * @return {*}
 */
function selectionSort(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    let maxIndex = 0;         // 最大元素的位置
    for (let j = 0; j <= i; j++) {
      if (nums[maxIndex] < nums[j]) {
        maxIndex = j;
      }
    }
    swap(nums, maxIndex, i);   // 把这个最大的元素移到最后
  }
}

/**
 * @description: 插入排序
 * 核心思想：遍历整个数组，保持当前元素左侧始终是排序后的数组，然后将当前元素插入到前面排序完成的数组的对应的位置，使其保持排序状态。
 *         有点动态规划的感觉，类似于先把前i-1个元素排序完成，再插入第i个元素，构成i个元素的有序数组。
 * 时间复杂度： 最好：数组已经排好序的时候是O(n)  最坏：O(n^2)
 * 空间复杂度： O(1)
 * 稳定
 * @param {*} nums
 * @return {*}
 */
function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {   // 从第二个元素开始遍历
    let j = i;
    while (j > 0 && nums[j] < nums[j - 1]) {     // 将当前元素移动到合适的位置
      swap(nums, j, j - 1);
      j--;
    }
  }
}

/**
 * @description: 希尔排序
 * 时间复杂度：有点复杂
 * 空间复杂度： O(1)
 * @param {*} nums
 * @return {*}
 */
function shellSor(nums) {
  let gap = nums.length >> 1;
  while (gap > 0) {
    for (let i = 0; i < gap; i++) {                        // 对每个子序列进行排序
      for (let j = i + gap; j < nums.length; j += gap) {     // 插入排序的部分
        let temp = j;
        while (temp > i && nums[temp] < nums[temp - gap]) {
          swap(nums, temp, temp - gap);
          temp -= gap;
        }
      }
    }
    gap >>= 1;
  }
}

/**
 * @description: 快速排序（有时称为分区交换排序）
 * 核心思想：取第一个元素作为分界点，把整个数组分成左右两侧，
 *        左边的元素小于或者等于分界点元素，而右边的元素大于分界点元素，然后把分界点移到中间位置，
 *        对左右子数组分别进行递归，最后就能得到一个排序完成的数组
 * 时间复杂度： O(nlogn) 
 * 空间复杂度： O(logn)
 * @param {*} arr
 * @param {*} startIndex
 * @param {*} endIndex
 * @return {*}
 */
function quickSort(arr, startIndex, endIndex) {
  // 递归结束条件：startIndex大等于endIndex的时候
  if (startIndex >= endIndex) {
    return;
  }
  // 得到基准元素位置
  let pivotIndex = partition(arr, startIndex, endIndex);
  // 根据基准元素，分成两部分递归排序
  quickSort(arr, startIndex, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, endIndex);

  /**
   * 分治（单边循环法）
   * @param arr     待交换的数组
   * @param startIndex    起始下标
   * @param endIndex    结束下标
   */
  function partition(arr, startIndex, endIndex) {
    // 取第一个位置的元素作为基准元素（也可以选择随机位置）
    let pivot = arr[startIndex];
    let mark = startIndex;

    for (let i = startIndex + 1; i <= endIndex; i++) {
      if (arr[i] < pivot) {
        mark++;
        let p = arr[mark];
        arr[mark] = arr[i];
        arr[i] = p;
      }
    }

    arr[startIndex] = arr[mark];
    arr[mark] = pivot;
    return mark;
  }
}


/**
* 堆排序(升序)
* 核心思想：首先构造一个最大堆，然后依次把堆顶元素与最后一个元素交换，递归执行最后就形成了从堆顶到堆尾的排好序的数组
* 时间复杂度：O(nlogn)
* 空间复杂度：O(1)
* @param array     待调整的堆
*/
function heapSort(array) {
  // 1.把无序数组构建成最大堆。
  for (let i = (array.length - 2) / 2; i >= 0; i--) {
    downAdjust(array, i, array.length);
  }

  // 2.循环交换集合尾部元素到堆顶，并调节堆产生新的堆顶。
  for (let i = array.length - 1; i > 0; i--) {
    // 最后一个元素和第一元素进行交换
    let temp = array[i];
    array[i] = array[0];
    array[0] = temp;
    // 下沉调整最大堆
    downAdjust(array, 0, i);
  }

  /**
   * 下沉调整
   * @param array     待调整的堆
   * @param parentIndex    要下沉的父节点
   * @param length    堆的有效大小
   */
  function downAdjust(array, parentIndex, length) {
    // temp保存父节点值，用于最后的赋值
    let temp = array[parentIndex];
    let childIndex = 2 * parentIndex + 1;
    while (childIndex < length) {
      // 如果有右孩子，且右孩子大于左孩子的值，则定位到右孩子
      if (childIndex + 1 < length && array[childIndex + 1] > array[childIndex]) {
        childIndex++;
      }
      // 如果父节点大于等于任何一个孩子的值，直接跳出
      if (temp >= array[childIndex])
        break;
      //无需真正交换，单向赋值即可
      array[parentIndex] = array[childIndex];
      parentIndex = childIndex;
      childIndex = 2 * childIndex + 1;
    }
    array[parentIndex] = temp;
  }
}

/**
 * @description: 二叉树排序
 * 核心思想：用数组内的所有元素构建一个搜索二叉树，然后用中序遍历重新将所有的元素填充回原来的数组中
 * 时间复杂度： 最坏：O(n^2) 最好：O(nlogn)
 * 空间复杂度：O(n)
 * @param {*} nums
 * @return {*}
 */
function bstSort(nums) {
  let root = { val: nums[0] }   // 构建根节点
  for (let i = 1; i < nums.length; i++) {  // 将所有的元素插入到二叉搜索树中
    buildTree(root, nums[i]);
  }
  inorderTraversal(root, nums, [0]);// 中序遍历获取二叉树中的所有节点
  return nums;

  function inorderTraversal(node, nums, pos) {
    if (node == null) return;
    inorderTraversal(node.left, nums, pos);
    nums[pos[0]++] = node.val;
    inorderTraversal(node.right, nums, pos);
  }

  function buildTree(node, num) {
    if (node == null) return;
    if (num >= node.val) {                   // 插入到右子树中
      if (node.right == null) {
        node.right = { val: num };
      } else {
        buildTree(node.right, num);
      }
    } else {                                 // 插入到左子树中
      if (node.left == null) {
        node.left = { val: num };
      } else {
        buildTree(node.left, num);
      }
    }
  }
}

function countSort(array) {
  //1.得到数列的最大值和最小值，并算出差值d
  let max = array[0];
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  let d = max - min;
  //2.创建统计数组并统计对应元素个数
  let countArray = Array(d + 1).fill(0);
  for (let i = 0; i < array.length; i++) {
    countArray[array[i] - min]++;
  }
  //3.统计数组做变形，后面的元素等于前面的元素之和
  for (let i = 1; i < countArray.length; i++) {
    countArray[i] += countArray[i - 1];
  }
  //4.倒序遍历原始数列，从统计数组找到正确位置，输出到结果数组
  let sortedArray = Array(array.length).fill(0);
  for (let i = array.length - 1; i >= 0; i--) {
    sortedArray[countArray[array[i] - min] - 1] = array[i];
    countArray[array[i] - min]--;
  }
  return sortedArray;
}

console.log(countSort(arr));

