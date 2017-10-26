const solution = require('../solutions/18');

const test = (testObj, result) => {
  if (solution(testObj) == result) {
    console.log(`Correct!`);
  } else {
    console.log(`Wrong. Expected: ${result}. Actual: ${solution(testObj)}`);
  }
};

test({k1: 100, k2: 50, k3: 0}, 'k1');
