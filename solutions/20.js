<<<<<<< HEAD
const solution = (levels = []) => {
  if (!levels.length) return;
  const n = levels.shift();
  solution(levels.concat(n.children));
=======
const solution = (current, next = [], result = []) => {
  if (current.length == 0 && next.length == 0) return result;
  if (current.length == 0) {
    result.push(next);
    const n = current.shift();
    current = next;
    next = [];
  }
  return solution(current, next.concat(n.children), result);
>>>>>>> 3f17e2e... changes to #20
};

module.exports = solution;
