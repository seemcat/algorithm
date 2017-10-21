const solution = (levels = []) => {
  if (!levels.length) return;
  const n = levels.shift();
  solution(levels.concat(n.children));
};

module.exports = solution;
