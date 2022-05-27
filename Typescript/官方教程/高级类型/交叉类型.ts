function extend<T extends object, U extends object>(first: T, second: U): T & U {
  let result = <T & U>{};
  for (let id in first) {
      (<any>result)[id] = (<any>first)[id];
  }
  for (let id in second) {
      if (!result.hasOwnProperty(id)) {
          (<any>result)[id] = (<any>second)[id];
      }
  }
  return result;
}

class Person {
  constructor(public name: string) { }
}
interface Loggable {
  log(): void;
}
class ConsoleLogger implements Loggable {
  log() {
    console.log('ConsoleLogger');
  }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
// 这里会报错，因为通过class定义的方法在原型对象中的enumerable为false，而传统的定义方式则为true
jim.log();