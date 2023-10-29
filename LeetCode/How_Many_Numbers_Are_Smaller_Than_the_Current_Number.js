var smallerNumbersThanCurrent = function (nums) {
  let arr = new Array(nums.length - 1);
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
      if (j == nums.length - 1) {
        arr[i] = count;
        count = 0;
      }
    }
  }
  return arr;
};
