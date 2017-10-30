const solution = require('../solutions/25');

const test = (arr, result) => {
  const compareArrs = (arr, arr2Comp, i = 0, result) => {
    if (arr.length == i) return result;
    if (arr[i] == arr2Comp[i]) result = true;
    else result = false;
    return compareArrs(arr, arr2Comp, i + 1, result);
  };

  if (compareArrs(solution(arr), result) == true) console.log('Correct!');
  else console.log(`Wrong. Expected: ${result}. Actual: ${solution(arr)}`);
};

test([1, 1, 1, 2, 2, 3, 3, 4], [1, 2, 3]);
test([1, 2, 3, 3, 4], [3]);
test([0, 0, 1, 2, 3], [0]);
