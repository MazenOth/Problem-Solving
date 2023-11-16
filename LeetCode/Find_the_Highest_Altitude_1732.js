var largestAltitude = function (gain) {
  let res = [0, gain[0]];
  for (let i = 1; i < gain.length; i++) {
    res.push(gain[i] + res[i]);
  }
  return Math.max(...res);
};


