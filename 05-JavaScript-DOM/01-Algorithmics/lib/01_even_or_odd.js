function evenOrOdd(number) {
  // TODO: this should return "even" if the number is even, "odd" otherwise
  return number % 2 === 1 ? "odd" : "even";
}

module.exports = evenOrOdd; // Do not remove. We need this for the spec to know about your method.

console.log(evenOrOdd(0));
