const solution = require('../solutions/19');

const test = (linkedList, result) => {
  if (solution(linkedList) == result) {
    console.log(`Correct!`);
  } else {
    console.log(`Wrong. Expected: ${result}. Actual: ${solution(linkedList)}`);
  }
};

const b = { val: 2};
const a = { val: 1, next: b };
test(a, false);
test(b, false);
