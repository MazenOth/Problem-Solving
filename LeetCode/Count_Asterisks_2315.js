var countAsterisks = function (s) {
  let arr = s.split("");
  let temp = [];
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "|") {
      x++;
      temp.push(i);
    }
    if (x === 2) {
      arr.splice(temp[0], temp[1] - temp[0] + 1);
      x = 0;
      temp = [];
      i = 0;
    }
  }
  return(arr.join("").replace(/[^*]/g, "").length);
};


