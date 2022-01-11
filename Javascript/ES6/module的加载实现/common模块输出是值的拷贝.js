// lib.js
var counter = 3;
function incCounter() {
  counter++;
}

countRef = {
  counter: 3
}
function incCounterRef() {
  countRef.counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
  countRef,
  incCounterRef
};