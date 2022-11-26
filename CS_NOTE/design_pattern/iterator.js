/**
 * 이터레이터 패턴
 * - 이터레이터를 사용하여 컬렉선의 요소를 접근하는 디자인 패턴
 * - 순회할 수 있는 각기 다른 자료형의 구조와는 상관없이 이터레이터라는 하나의 인터페이스로 순회가 가능해서
 * - 코드의 효율화, 숫자형 index가 아닌 string등 다양한 index를 기반으로 순회를 쉽게 할 수 있다.
 * - 자바스크립트에서 이 패턴을 적용한 인터레이스는 'for of'가 있다.
 *
 * ? 컬렉션: 컨테이너라고도 하고, 동일한 요소들의 집합이다. (배열, 트리 등등)
 * ? 이터레이터 프로토콜: 이터러블한 객체를 순회할 때 사용하는 규칙
 * ? 이터러블한 객체: 반복 가능한 객체로 배열을 일반화한 객체
 */

const mp = new Map();
mp.set('a', 1);
mp.set('b', 2);
mp.set('c', 3);

const st = new Set();
st.add(10);
st.add(20);
st.add(30);

const a = [];
for (let i = 0; i < 3; i++) {
  a.push(i);
}

for (const [key, value] of mp) {
  console.log(key, value);
}

for (const value of st) {
  console.log(value);
}

for (const value of a) {
  console.log(value);
}
