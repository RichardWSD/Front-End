class A {
  constructor() {
    this.x = 1;
  }
}
/* 
super两种用法：
1. 用在函数中 
  - super作为函数调用时，代表父类的构造函数
  - 作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错
2. 用作对象
  - super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类
  - 在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例
  - 如果通过super对某个属性赋值，这时super就是this，赋值的属性会变成子类实例的属性
*/
class B extends A {
  constructor() {
    super();
    this.x = 2;
    super.x = 3;
    console.log(super.x); // undefined
    console.log(this.x); // 3
  }
}

let b = new B();