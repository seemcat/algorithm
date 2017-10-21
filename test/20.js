const solution = require('../solutions/20');

const test = (tree, result) => {
  if (solution(tree) == result) {
    console.log(`Correct!`);
  } else {
    console.log(`Wrong. Expected: ${result}. Actual: ${solution(tree)}`);
  }
};

const c = {val: 1,
  children: [],
};

const a = {val: 2,
  children: [c],
};

const b = {val: 3,
  children: [],
};

const t = {val: 1,
  children: [a, b],
};

test([t]);
