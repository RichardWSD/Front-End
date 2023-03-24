Array.prototype.flat= function() {
  const res =  [].concat(...this.map(item => {
    if(Array.isArray(item)) {
      return item.flat()
    }
    return [item]
  }));
  console.log(res)
  return res
}

Array.prototype.unique = function() {
  return [...new Set(this)]
}

let children2 = [[[[7, 8], 5, 6]], 4, 1, [2, 3], [9, 10]];
children2.flat()