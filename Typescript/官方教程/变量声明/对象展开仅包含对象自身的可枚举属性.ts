class C {
  p = 12;
  m() {
  }
}
let c = new C();
let clone = { ...c };
clone.p; // ok
console.log(11111) // 这句可以看得出来是在编译时
// clone.m(); // error!