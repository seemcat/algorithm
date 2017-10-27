const solution = (levels = []) => {
  if (!levels.length) return;
  const n = levels.pop();
  console.log('Value of node: ', n.val);
  solution(levels.concat(n.children));
};

const c = {val: 1,
  children: [],
};

const a = {val: 2,
  children: [],
};

const b = {val: 3,
  children: [c],
};

const t = {val: 1,
  children: [a, b],
};

solution([t]);

module.exports = solution;
