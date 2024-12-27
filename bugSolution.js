function foo(a, b) {
  if (isNaN(a) && isNaN(b)) {
    return true; //Consider NaN as equal
  } else if (a === b) {
    return true; 
  }
  return false; 
}

console.log(foo(NaN, NaN)); //true
console.log(foo(1,1)); //true
console.log(foo(1,2)); //false