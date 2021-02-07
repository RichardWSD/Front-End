function createData(arr, root = {}) {
  let queue = [root];
  root.val = arr.shift();

  while(arr.length) {
    let node = queue.shift();
    let lv = arr.shift();
    if(lv) {
      node.left = {
        val: lv
      };
      queue.push(node.left)
    }
    let rv = arr.shift();
    if(rv) {
      node.right = {
        val: rv
      };
      queue.push(node.right)
    }
  }
  return root;
}

console.log(createData([1,2,2,3,null,null,3,4,null,null,4]))