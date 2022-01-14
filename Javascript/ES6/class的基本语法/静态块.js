class C {
  static x = 1;
  static y;
  static z;
  
  // ES2022 引入了静态块（static block），允许在类的内部设置一个代码块，在类生成时运行一次，主要作用是对静态属性进行初始化
  static {
    try {
      const obj = doSomethingWith(this.x);
      this.y = obj.y;
      this.z = obj.z;
    }
    catch {
      this.y = 2;
      this.z = 3;
    }
  }
}
