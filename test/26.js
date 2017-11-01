const solution = require('../solutions/26');

const test = (testArr, num, result) => {
  if (solution(testArr, num) == result) {
    console.log(`Correct!`);
  } else {
    console.log(`Wrong. Expected: ${result}. Actual: ${solution(testArr)}`);
  }
};

test([1, 1, 2, 4, 5], 3, true);
test([5, 6, 2], 13, false);
