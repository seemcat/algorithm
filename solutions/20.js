const solution = (current, next = [], result = [current.slice()]) => {
  if (current.length == 0 && next.length == 0) return result;
  if (current.length == 0) {
    result.push(next.slice());
    return solution(next, [], result);
  } else {
    n = current.shift();
    return solution(current, next.concat(n.children), result);
  }
};

module.exports = solution;
