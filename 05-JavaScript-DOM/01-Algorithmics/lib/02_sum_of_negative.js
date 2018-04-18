function sumOfNegative(numbers) {
  // TODO: You are getting an array `numbers`. Return the sum of **negative** numbers only.
  let result = 0;
  numbers.forEach((number) => {
    if (number < 0) {
      result += number;
    }
  });
  return result;
}

module.exports = sumOfNegative; // Do not remove.
console.log(sumOfNegative([-4, 5, -2, 9]));
