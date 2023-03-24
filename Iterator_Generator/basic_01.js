/**
 *? a generator is a type of iterator has a next() method that returns an object with a value and done property
 */

// 예시
someIterator.next(); // { value: 1, done: false }
someIterator.next(); // { value: 2, done: false }
someIterator.next(); // { value: 3, done: false }
someIterator.next(); // { value: undefined, done: true }
