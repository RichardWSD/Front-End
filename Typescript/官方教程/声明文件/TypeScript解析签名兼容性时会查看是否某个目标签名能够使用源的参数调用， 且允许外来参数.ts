/* OK */
interface Example {
  diff(one: string, two?: string, three?: boolean): number;
}

/* 错误 */
/* interface Example {
  diff(one: string): number;
  diff(one: string, two: string): number;
  diff(one: string, two: string, three: boolean): number;
}
 */
function fn(x: (a: string, b: number, c: number) => void) { }
var xx: Example
/* // When written with overloads, OK -- used first overload
// When written with optionals, correctly an error
fn(xx.diff); */

// When written with overloads, incorrectly an error because of passing 'undefined' to 'string'
// When written with optionals, correctly OK
xx.diff("something", true ? undefined : "hour");