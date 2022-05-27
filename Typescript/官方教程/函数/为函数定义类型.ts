function add(x: number, y: number): number {
  return x + y;
}

// TypeScript能够根据返回语句自动推断出返回值类型，因此我们通常省略它
let myAdd = function(x: number, y: number): number { return x + y; };