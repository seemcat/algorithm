const solution = require('../solutions/24');

const test = (testObj, result) => {

  const checkKV = (obj1, obj2, keys1 = Object.keys(obj1), keys2 = Object.keys(obj2), i = 0) => {
    if (i === keys1.length) return result;
    const key1 = keys1[i];
    const key2 = keys2[i];
    if (obj1[key1] === obj2[key2]) {
      result = true;
    } else {
      result = false;
    }
    return checkKV(obj1, obj2, keys1, keys2, i + 1);
  };
  if (checkKV(solution(testObj), testObj) === true) {
    console.log(`Correct!`);
  } else {
    console.log('Wrong. Expected: ',result,'. Actual:' ,solution(testObj));
  }
};

const obj = {m1: 'what',
  m2: 'hi',
  m3: 'hello',
};

const obj1 = {m1: 'maricris',
  m2: 'kona',
  m3: 'dan',
  m4: 'ki',
  m5: 'mb',
  m6: 'bonzo',
};

test(obj, true);
test(obj1, true);
