var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  let res = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      res.push(true);
    } else {
      res.push(false);
    }
  }
  return res;
};
