let getX;

export class C {
  #x = 1;
  // #x是类的私有属性，如果类外部的getX()方法希望获取这个属性，以前是要写在类的constructor()方法里面，这样的话，每次新建实例都会定义一次getX()方法。
  // 现在可以写在静态块里面，这样的话，只在类生成时定义一次
  static {
    getX = obj => obj.#x;
  }
}

console.log(getX(new C())); // 1