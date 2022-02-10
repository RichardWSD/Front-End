function currying(fn) {
  return function (...args) {
    if(args.length >= fn.length) {
      return fn.apply(this, args)
    }else{
      return currying(fn.bind(this, ...args))
    }
   /*  return args.length >= fn.length
      ? fn.apply(this, args)
      : currying(fn.bind(this, ...args)) */
  }
}
const fn = currying(function (a, b, c) {
  console.log([a, b, c]);
});

// fn("a", "b", "c") // ["a", "b", "c"]
// fn("a", "b")("c") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
// fn("a")("b", "c") // ["a", "b", "c"]

function abc(a,b,c) {}
console.log(abc.length)
const bindAbc = abc.bind(undefined, 'a')
console.log(bindAbc.length);