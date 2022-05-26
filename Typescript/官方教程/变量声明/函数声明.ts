function f({ a, b = 0 } = { a: "" }): void {
  console.log('===> ', a, b)
}
f({ a: "yes" }); // ok, default b = 0
f(); // ok, default to {a: ""}, which then defaults b = 0
f({}); // error, 'a' is required if you supply an argument