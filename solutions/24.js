const solution = (obj, keys = Object.keys(obj), i = 0) => {
  if (i === keys.length) return obj;
  const key = keys[i];
  if (obj[key].length < 3) delete obj[key];
  return solution(obj, keys, i + 1);
};

module.exports = solution;
