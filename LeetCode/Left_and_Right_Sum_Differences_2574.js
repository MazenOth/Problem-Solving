var leftRightDifference = function (nums) {
  let left = [0];
  let right = [0];
  let res = new Array(nums.length);

  for (let i = 0; i < nums.length - 1; i++) {
    left.push(nums[i] + left[i]);
  }
  for (let i = nums.length - 1; i > 0; i--) {
    right.unshift(nums[i] + right[0]);
  }
  for (let i = 0; i < nums.length; i++) {
    res[i] = Math.abs(left[i] - right[i]);
  }
  return res;
};
