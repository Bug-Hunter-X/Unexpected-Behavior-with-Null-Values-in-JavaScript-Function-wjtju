# Unexpected Behavior with Null Values in JavaScript Function

This repository demonstrates a common JavaScript bug related to handling null values in function arguments. The function `foo` is designed to add two numbers, but it incorrectly handles null values, always returning 0 in those cases. The solution demonstrates a more robust approach to handling nulls, using a more controlled approach that depends on the intended function.

## Bug

The original code exhibits unexpected behavior when a null value is passed as an argument.  This is often an error that can be difficult to debug, especially in larger codebases.  The null check prematurely short-circuits the function, preventing the addition operation when only one argument is null.

## Solution

The solution addresses the issue by explicitly checking for null values before performing the addition. The code now correctly handles scenarios where only one argument is null, providing the expected behavior.

## How to Reproduce

1. Clone the repository
2. Open `bug.js` in your text editor or IDE
3. Run the code using a Node.js runtime (or a browser's console)
4. Observe the unexpected output
5. Then, compare this to the correct functionality demonstrated in `bugSolution.js`