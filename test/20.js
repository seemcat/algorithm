const solution = require('../solutions/20');

const tree1 = {
  val: 1,
  children: [{
    val: 2,
    children: [],
  }, {
    val: 3,
    children: [],
  }],
};

const tree2 = {
  val: 1,
  children: [{
    val: 2,
    children: [{
      val: 4,
      children: [],
    }, {
      val: 5, children: [],
    }],
  }, {
    val: 3,
    children: [{
      val: 6,
      children: []}, {
        val: 7,
        children: [],
      }],
  }],
};

const test = (current, result)=>{
  if (solution(current).length === result) {
    console.log('Correct levels!');
  } else {
    console.log('Incorrect levels.');
  }
};

test([tree1], 2);
test([tree2], 3);
