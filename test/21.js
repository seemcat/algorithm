const solution = require('../solutions/21');

const test = (node, result) => {
  if (solution(node) == result) {
    console.log(`Correct!`);
  } else {
    console.log(`Wrong. Expected: ${result}. Actual: ${solution(node)}`);
  }
};

const node3 = {value: 43, next: null};
const node2 = {value: 5, next: node3};
const node1 = {value: 19, next: node2};
test(node1, 43);

const node3a = {value: -43, next: null};
const node2a = {value: 5, next: node3a};
const node1a = {value: -19, next: node2a};
test(node1a, 5);

const node3b = {value: -43, next: null};
const node2b = {value: -5, next: node3b};
const node1b = {value: -19, next: node2b};
test(node1b, -5);

