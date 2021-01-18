const log = console.log;

/**
 * 실행할 함수를 인자로 받고 그 함수의 인자를 받는 함수를 리턴한다
 * 인자의 개수가 2개 이상이라면 즉시 평가하고
 * 인자가 1개라면 다시 인자를 받아 이전 인자와 함께 평가한다.
 * @param {*} f 보조함수
 */
const curry = f => (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._));

const map = curry((fn, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(fn(a));
  }
  return res;
});

const filter = curry((fn, iter) => {
  let res = [];

  for (const a of iter) {
    if (fn(a)) res.push(a);
  }

  return res;
});

const reduce = curry((fn, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = fn(acc, a);
  }

  return acc;
});
