function foo(a, b) {
  let result = 0; // Initialize result to 0
  if (a !== null) {
    result += a;
  }
  if (b !== null) {
    result += b;
  }
  return result; // Return sum, handle null values correctly
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(null, null)); //Output: 0