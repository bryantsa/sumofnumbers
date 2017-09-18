/**
 * Solving Experience ES26.
 * Created by bryantsanchez on 8/17/17.
 */

const l = [1, 2, 3, 4];

function sumFor(list) {
  let total = 0;
  for (const num of list) {
    total += num;
  }
  return total;
}

console.log(sumFor(l));

function sumWhile(list) {
  let index = 0;
  let i = 0;
  while (i < list.length) {
    index += list[i];
    i++;
  }
  return index;
}

console.log(sumWhile(l));

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

console.log(sumRecursion(l));

function sumTheSimpleWay(list) {
  return _.reduce(list, function x(memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(l));
