class Animal {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
  constructor() { super("Rhino"); }
  roar() {
    // 不能访问到基类私有属性
    console.log('==> ', this.name)
  }
}

new Rhino().roar()