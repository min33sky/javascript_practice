const log = console.log;

/**
 * 제너레이터 / 이터레이터
 * - 제러레이터: 이터레이터이자 이터러블을 생성하는 함수
 */

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

let iter = gen();
console.log(iter[Symbol.iterator]() === iter);
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());

for (const a of gen()) {
  console.log(a);
}

// odds : 홀수를 리턴하는 제너레이터

function* infinity(i = 0) {
  while (true) yield i++;
}
function* limit(l, iter) {
  for (const a of iter) {
    yield a;
    if (a === l) return;
  }
}
function* odds(l) {
  for (const a of limit(l, infinity(1))) {
    if (a % 2) yield a;
  }
}
let iter2 = odds(10);
log(iter2.next());
log(iter2.next());
log(iter2.next());
log(iter2.next());
log(iter2.next());
log(iter2.next());
log(iter2.next());

for (const a of odds(40)) {
  log(a);
}

// for of, 전개 연산자, 구조 분해, 나머지 연산자

console.log(...odds(10));
console.log([...odds(10), ...odds(20)]);

const [head, ...tail] = odds(5);
console.log(head);
console.log(tail);

const [a, b, ...rest] = odds(10);
console.log(a);
console.log(b);
console.log(rest);
