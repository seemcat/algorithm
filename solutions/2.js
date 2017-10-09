const solution = (num1, num2, num3, i = 0, threeNums = [num1, num2, num3], biggestNum = num1) => {
  if(i >= threeNums.length - 1){
    return biggestNum;
  }
  if(biggestNum < threeNums[i + 1]){
    biggestNum = threeNums[i + 1];
  }
  return solution(num1, num2, num3, i + 1, threeNums, biggestNum);
};

module.exports = solution;
