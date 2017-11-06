const solution = require('../solutions/28');

const test = (lL, result) => {
  if (solution(lL) == result) {
    console.log(`Correct!`);
  } else {
    console.log(`Wrong. Expected: ${result}. Actual: ${solution(lL)}`);
  }
};

const n1 = {val: 'n1Val'};
const n2 = {val: 'n2Val'};
const n3 = {val: 'n3Val'};

n1['next'] = n2;
n2['next'] = n3;
n3['next'] = n2;

test(n1, true);

const n4 = {val: 'n4Val'};
const n5 = {val: 'n5Val'};
const n6 = {val: 'n6Val'};
const n7 = {val: 'n7Val'};

n4['next'] = n5;
n5['next'] = n6;
n6['next'] = n7;
n7['next'] = n6;

test(n4, true);

const n8 = {val: 'n8Val'};
const n9 = {val: 'n9Val'};
const n10 = {val: 'n10Val'};

n8['next'] = n9;
n9['next'] = n10;

test(n8, false);
