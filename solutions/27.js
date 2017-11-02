const solution = (obj, func, keys = Object.keys(obj), i = 0) => {
  if (i == keys.length) return;
  func(keys[i], obj[keys[i]]);
  return solution(obj, func, keys, i + 1);
};

module.exports = solution;
