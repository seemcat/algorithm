const checkPrime = require('../solutions/8');

const solution = (num, arr = []) => {
  if (num != 0) {
    if (checkPrime(num) == true) {
      arr.unshift(num);
    }
    return solution(num - 1, arr);
  }
  arr.unshift(1);
  return arr;
};

module.exports = solution;
