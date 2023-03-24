/**
 * 자바스크립트에서의 Iterator(반복자)?
 * => Iterator는 반복 가능한 객체를 순회할 수 있는 객체이다.
 * => Symbol.iterator 속성은 반복 가능한 객체를 순회할 수 있는 객체를 반환한다.
 * * next() 메서드를 구현하고, next() 메서드는 value와 done 속성을 갖는 객체를 반환한다.
 */

// 이터레이터 타입의 예)
const iter = {
  next() {
    return {
      value: 1,
      done: true,
    };
  },
};

// 이터레이터 구현 예)
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;

  let rangeIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = {
          value: nextIndex,
          done: false,
        };
      } else if (nextIndex === end) {
        result = {
          value: nextIndex,
          done: true,
        };
      } else {
        result = {
          value: undefined,
          done: true,
        };
      }

      nextIndex += step;
      return result;
    },
  };

  return rangeIterator;
}

const it = makeRangeIterator(1, 10, 2);

console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 3, done: false }
console.log(it.next()); // { value: 5, done: false }
console.log(it.next()); // { value: 7, done: false }
console.log(it.next()); // { value: 9, done: false }
console.log(it.next()); // { value: undefined, done: true }
