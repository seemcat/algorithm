const solution = (node, nextNode = node.next, max = node.next) => {
  if (nextNode == null || nextNode == node) return max;
  if (node.value < nextNode.value) max = nextNode.value;
  return solution(node, nextNode.next, max);
};

module.exports = solution;
