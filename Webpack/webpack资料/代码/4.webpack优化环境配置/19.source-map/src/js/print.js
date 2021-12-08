console.log('print.js被加载了~');

class A {

}

console.log(new A())

function print() {
  const content = 'hello print'; console.log(content)();
}

export default print;
