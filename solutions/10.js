const solution = (func, num1, num2, bigger, i = 0) => {
  if (i !== bigger) {
    func(i + 1);
    solution(func, num1, num2, bigger, i + 1);
  };
};
module.exports = solution;
