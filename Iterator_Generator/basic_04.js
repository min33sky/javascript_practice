/**
 * generators are also iterable
 */

function* abcs() {
  yield 'a';
  yield 'b';
  yield 'c';
}

for (const letter of abcs()) {
  console.log(letter.toUpperCase());
}

console.log([...abcs()]);
