// 当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致
class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
}


interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  // name的类型与字符串索引类型不匹配，所以类型检查器给出一个错误提示
  name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}

// 可以将索引签名设置为只读，这样就防止了给索引赋值
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory"; // error!