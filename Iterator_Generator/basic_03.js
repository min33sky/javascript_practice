/**
 *? .next() advences; yield pauses; return stops
 */

function* loggerator() {
  console.log('running...........🚀');
  yield 'pauses';
  console.log('running again...........🚀');
  return 'stopped';
}

let logger = loggerator();

console.log(logger.next()); // { value: 'pauses', done: false }

console.log(logger.next()); // { value: 'stopped', done: true }
