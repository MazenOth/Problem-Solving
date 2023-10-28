var convertTemperature = function (celsius) {
  let ans = [0, 0];
  ans[0] = celsius + 273.15;
  ans[1] = celsius * 1.8 + 32.0;
  return ans;
};

