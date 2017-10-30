const solution = (arr, newArr = [], j = 0) => {
  const makeObj = (arr, newObj = {}, i = 0) => {
    if (arr.length == i) return newObj;
    if (!newObj[arr[i]]) newObj[arr[i]] = 1;
    else newObj[arr[i]] += 1;
    return makeObj(arr, newObj, i + 1);
  };

  let obj = makeObj(arr);
  let keyArr = Object.keys(obj);

  if (keyArr.length == j) return newArr;
  if (obj[j] >= 2) newArr.push(j);
  return solution(arr, newArr, j + 1);
};

module.exports = solution;
