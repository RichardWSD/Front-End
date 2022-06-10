// 这里有两种选择： number和null。 计算通用类型算法会考虑所有的候选类型，并给出一个兼容所有候选类型的类型
let x = [0, 1, null];

// 这里，我们想让zoo被推断为Animal[]类型，但是这个数组里没有对象是Animal类型的，因此不能推断出这个结果
// 如果没有找到最佳通用类型的话，类型推断的结果为联合数组类型，(Rhino | Elephant | Snake)[]
class Animal{}

class Rhino extends Animal{}
class Elephant extends Animal{}
class Snake extends Animal{}

let zoo = [new Rhino(), new Elephant(), new Snake(), new Animal()];
let zoo = [new Rhino(), new Elephant(), new Snake()];

// 更正，当候选类型不能使用的时候我们需要明确的指出类型
let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];