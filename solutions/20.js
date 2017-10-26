const solution = (current, next = [], result = []) => {
  if (current.length == 0 && next.length == 0) return result;
  if (current.length == 0) {
    result.push(next);
    const n = current.shift();
    current = next;
    next = [];
  }
  return solution(current, next.concat(n.children), result);
};

module.exports = solution;
