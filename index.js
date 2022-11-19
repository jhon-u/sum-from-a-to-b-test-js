
// Sum all the values from fromN up to toN

const sum = function(fromN, toN) {
  if (fromN === toN) {
    return toN;
  }
  return fromN + sum(fromN + 1, toN);
};

sum(1, 1);

module.exports = sum;
