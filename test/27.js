const solution = require('../solutions/27');

const test1 = (result) => {
  let count = 0;

  const obj1 = {
    name: 'Maricris',
    age: 24,
  };
  const func1 = (key, value) => {
    count = count + 1;
    console.log(`KEY/VALUE PAIR: (${key}, ${value})`);
  };

  solution(obj1, func1);

  if (count == result) console.log('Correct!');
  else console.log(`Wrong.`);
};

test1(2);

const test2 = (result) => {
  let count = 0;

  const obj1 = {
    curriculum: 'HTML',
    challenges: 3,
    students: 'Kinue + Saumya + Amey',
    level: 5,
  };
  const func1 = (key, value) => {
    count = count + 1;
    console.log(`KEY/VALUE PAIR: (${key}, ${value})`);
  };

  solution(obj1, func1);

  if (count == result) console.log('Correct!');
  else console.log(`Wrong.`);
};

test2(4);
