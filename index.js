
// Sum all the values from fromN up to toN
const sum = function(fromN, toN) {
  if (fromN === toN) {
    return toN;
  }
  return fromN + sum(fromN + 1, toN);
};

// TEST CODE
sum(1, 1);
sum(0, 0);
sum(5, 5);
sum(0, 1);
sum(3, 7);

module.exports = sum;
