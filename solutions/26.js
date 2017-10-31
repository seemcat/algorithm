const solution = (arr, n1, j = 0, ans) => {
  if (arr.length == j) return ans;
  const n2 = Math.abs(n1 - arr[j]);

  const isExist = (array, n1, i = 0, result) => {
    if (array.length == i) return result;
    if (array[i] == n1) return result = true;
    else result = false;
    return isExist(array, n1, i + 1, result);
  };

  if (isExist(arr, n2) == true) ans = true;
  else ans = false;
  return solution(arr, n1, j + 1, ans);
};

module.exports = solution;
