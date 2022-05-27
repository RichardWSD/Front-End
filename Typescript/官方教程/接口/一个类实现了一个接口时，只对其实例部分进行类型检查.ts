// 类是具有两个类型的：静态部分的类型和实例的类型。 你会注意到，当你用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个错误：
// constructor存在于类的静态部分，所以不在检查的范围内
interface ClockConstructor {
  new (hour: number, minute: number);
}

class Clock implements ClockConstructor {
  currentTime: Date;
  constructor(h: number, m: number) { }
}

// 正确做法
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);