var sortPeople = function (names, heights) {
  let map = new Map();

  for (let i = 0; i < names.length; i++) {
    map.set(heights[i], names[i]);
  }

  const sorted = [...map].sort((a, b) => b[0] - a[0]);

  const map2 = new Map(sorted);

  const values = [...map2.values()];

  return values;
};
