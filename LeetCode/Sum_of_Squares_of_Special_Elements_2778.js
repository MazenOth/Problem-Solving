var sumOfSquares = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums.length % (i + 1) == 0) {
      count += Math.pow(nums[i], 2);
    }
  }
  return count;
};
