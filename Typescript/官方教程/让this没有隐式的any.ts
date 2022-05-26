class Point {
  constructor(public x, public y) {}
  getDistance(p: Point) {
      let dx = p.x - this.x;
      let dy = p.y - this.y;
      return Math.sqrt(dx ** 2 + dy ** 2);
  }
}
// ...

// Reopen the interface.
interface Point {
  distanceFromOrigin(point: Point): number;
}

/* Point.prototype.distanceFromOrigin = function(point: Point) {
  // 当你在类的外部使用this关键字时，它会默认获得any类型。如果我们错误地拼写了getDistance并不会得到一个错误
  // TypeScript有 noImplicitThis选项。 当设置了它，TypeScript会产生一个错误当没有明确指定类型（或通过类型推断）的 this被使用时
  return this.getDistance11({ x: 0, y: 0});
}
 */
// 解决的方法是在接口或函数上使用指定了类型的 this参数
Point.prototype.distanceFromOrigin = function(this: Point, point: Point) {
  return this.getDistance(new Point(0, 0));
}