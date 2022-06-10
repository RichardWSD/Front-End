interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}



// 对象字面量会被特殊对待而且会经过 额外属性检查，当将它们赋值给变量或作为参数传递的时候。 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误
// var mySquare = createSquare({ colour: "red", width: 100 });
// 绕开这些检查办法
// 1。使用类型断言
var mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);

// 2.最佳的方式是能够添加一个字符串索引签
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}

//3.将这个对象赋值给一个另一个变量
var squareOptions = { colour: "red", width: 100 };
//这里squareOptions不会经过额外属性检查，所以编译器不会报错。
var mySquare = createSquare(squareOptions);