namespace Shapes {
  export const config = { a: 1 };
}

import cd = Shapes.config;
cd.a = 2;
console.log("src ==> ", Shapes.config);
console.log("dst ==> ", cd);

// 这个没搞懂
/* namespace A {  
  export interface X { s: string }
  // export const obj = {a: 1}
}

namespace B {  
  var A = 1;  
  import Y = A;
} */
