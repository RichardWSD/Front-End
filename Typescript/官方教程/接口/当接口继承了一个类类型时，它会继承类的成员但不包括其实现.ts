// 接口同样会继承到类的private和protected成员。 
// 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）

class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() { }
}

class TextBox extends Control {
  select() { }
}

// 错误：“Image”类型缺少“state”属性。
class Image implements SelectableControl {
  select() { }
}

class Location {

}