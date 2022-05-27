// 多态的 this类型表示的是某个包含类或接口的 子类型。 这被称做 F-bounded多态性。 它能很容易的表现连贯接口间的继承，
// 比如。 在计算器的例子里，在每个操作之后都返回 this类型：
class BasicCalculator {
  public constructor(protected value: number = 0) { }
  public currentValue(): number {
      return this.value;
  }
  public add(operand: number): this {
      this.value += operand;
      return this;
  }
  public multiply(operand: number): this {
      this.value *= operand;
      return this;
  }
  // ... other operations go here ...
}

let v = new BasicCalculator(2)
          .multiply(5)
          .add(1)
          .currentValue();



          
class ScientificCalculator extends BasicCalculator {
  public constructor(value = 0) {
      super(value);
  }
  public sin() {
      this.value = Math.sin(this.value);
      return this;
  }
  // ... other operations go here ...
}

let v = new ScientificCalculator(2)
      .multiply(5)
      .sin()
      .add(1)
      .currentValue();