var differenceOfSum = function (nums) {
  const sum = nums.reduce((a, b) => a + b);
  const digit = nums
    .join("")
    .split("")
    .map(Number)
    .reduce((a, b) => a + b);
  return Math.abs(sum - digit);
};

