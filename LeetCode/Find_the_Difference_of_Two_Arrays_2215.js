var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const arr1 = [...set1];
  const arr2 = [...set2];

  let diff1 = arr1.filter((e) => !arr2.includes(e));
  let diff2 = arr2.filter((e) => !arr1.includes(e));

  return [[...diff1], [...diff2]];
};

findDifference([1, 2, 3, 3], [1, 1, 2, 2]);
