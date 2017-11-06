const solution = (linkedList, nextNode = linkedList.next, obj = {}) => {
  if (!nextNode) return false;
  if (!obj[nextNode.val]) {
    obj[nextNode.val] = nextNode.val;
  } else {
    return true;
  }
  return solution(linkedList, nextNode.next || false, obj);
};

module.exports = solution;
