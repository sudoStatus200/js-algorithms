const editDistance = (from, to) => {
  if (typeof to !== "string" || typeof from !== "string") return null;

  let distances = [];
  for (let i = 0; i <= to.length; ++i) distances[i] = [i];
  for (let i = 0; i <= from.length; ++i) distances[0][i] = i;

  for (let i = 1; i <= to.length; ++i) {
    for (let j = 1; j <= from.length; ++j) {
      distances[i][j] =
        to[i - 1] === from[j - 1]
          ? distances[i - 1][j - 1]
          : Math.min.apply(Math, [
              distances[i - 1][j],
              distances[i][j - 1],
              distances[i - 1][j - 1]
            ]) + 1;
    }
  }
  return distances[to.length][from.length];
};

module.exports = editDistance;
