class Animal{}

class Rhino extends Animal{}
class Elephant extends Animal{}
class Snake extends Animal{}

// function createZoo() {
function createZoo(): Animal[] {
  return [new Rhino(), new Elephant(), new Snake()];
}

// 把鼠标放在变量上看变量类型
let res = createZoo()