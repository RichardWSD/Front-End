class Octopus {
  readonly numberOfLegs: number = 8;
  // 参数属性可以方便地让我们在一个地方定义并初始化一个成员，但要给构造函数参数前面添加一个访问限定符来声明
  // 使用 private限定一个参数属性会声明并初始化一个私有成员；对于 public和 protected来说也是一样
  constructor(readonly name: string) {
  }
  print() {
    console.log('===> ', this.name)
  }
}

new Octopus('sdddd').print()