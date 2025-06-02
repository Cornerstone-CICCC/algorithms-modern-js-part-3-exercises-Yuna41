// Exercise 2: Rest Operator
// Instructions: Write a function named `subtract` that takes any number of arguments and returns their difference. 
// Use the rest operator to handle the variable number of arguments. 
// Test your function with different numbers of arguments.

function subtract(...numbers) {
  return numbers
}

console.log(subtract(10, 2, 3)); // Example usage
console.log(subtract(78, 1, 54, 9, 23));
console.log(subtract(47));