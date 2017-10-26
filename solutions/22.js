const solution = (levels = []) => {
  if (!levels.length) return;
  const n = levels.shift();
  console.log('Value of each node: ', n.val);
  solution(levels.concat(n.children));
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

solution([t]);

module.exports = solution;
