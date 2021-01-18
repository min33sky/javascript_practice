const log = console.log;

const map = (fn, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(fn(a));
  }
  return res;
};

const filter = (fn, iter) => {
  let res = [];

  for (const a of iter) {
    if (fn(a)) res.push(a);
  }

  return res;
};

const reduce = (fn, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = fn(acc, a);
  }

  return acc;
};
