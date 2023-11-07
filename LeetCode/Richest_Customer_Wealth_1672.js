var maximumWealth = function (accounts) {
  let count = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = accounts[i].reduce((a, b) => a + b);
    if (sum > count) {
      count = sum;
    }
  }
  return count;
};
