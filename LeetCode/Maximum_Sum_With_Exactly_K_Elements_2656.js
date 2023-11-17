var maximizeSum = function (nums, k) {
  const max = Math.max(...nums);
  let res = max;

  for (let i = 1; i < k; i++) {
    res += max + i;
  }
  return res;
};
