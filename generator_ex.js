// 피보나치 수를 계산하는 제너레이터 함수 정의

function* getFibonacci() {
  let a = 0;
  let b = 1;

  while (true) {
    [a, b] = [b, a + b];
    yield a;
  }
}

const fib = getFibonacci();
console.log(fib);

for (const item of fib) {
  if (item > 50) break;
  console.log(item);
}
