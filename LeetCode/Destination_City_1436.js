var destCity = function (paths) {
  let count = 0;
  for (let i = 0; i < paths.length; i++) {
    for (let j = 0; j < paths.flat().length; j++) {
      let d = paths[i][1];
      if (paths.flat()[j] == d) {
        count++;
      }
      if (j == paths.flat().length - 1 && count > 1) {
        count = 0;
        continue;
      } else if (j == paths.flat().length - 1 && count == 1) {
        console.log(d);
      }
    }
  }
};

var destCity = function (paths) {
  let srcSet = new Set();
  let destination = [];
  for (let [src, dest] of paths) {
    srcSet.add(src);
    destination.push(dest);
  }
  for (let dest of destination) {
    if (!srcSet.has(dest)) return dest;
  }
};
