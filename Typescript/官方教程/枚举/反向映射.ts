// 数字枚举成员还具有了 反向映射，从枚举值到枚举名字
// 不会为字符串枚举成员生成反向映射
enum Enum {
  A
}
let a = Enum.A;
let nameOfA = Enum[a]; // "A"
console.log(nameOfA)

