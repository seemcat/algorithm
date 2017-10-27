const solution = (s, e = s.next) => {
  if (!e) return false;
  if (e === s) return true;
  return solution(s, e.next || false);
};

module.exports = solution;
