/**
 * Property Attribute
 *
 * 1. Data Property - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * - value
 * - writable
 * - enumerable
 * - configurable
 *
 * 2. Accessor Property - 실질적인 값을 갖고있지 않고, 다른 데이터 프로퍼티의 값을 읽거나 설정할 때 사용하는 접근자 함수로 구성된 프로퍼티 (getter, setter)
 * - get
 * - set
 * - enumerable
 * - configurable
 *
 */

const yujin = {
  name: 'Yujin',
  year: 2003,
};

console.log(Object.getOwnPropertyDescriptor(yujin, 'name'));
console.log(Object.getOwnPropertyDescriptor(yujin, 'year'));

/**
 * 1) value - 실제 프로퍼티 값
 * 2) writable - 프로퍼티 값 변경 가능 여부
 * 3) enumerable - 프로퍼티 열거 가능 여부
 * 4) configurable - 프로퍼티 어트리뷰트 재정의 가능 여부. false 일 경우 프로퍼티 삭제나 변경 금지
 *                   단, writable이 true인 경우 값 변경과 writable을 변경할 수 있다.
 */

const yujin2 = {
  name: 'Yujin',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(yujin2);

yujin2.age = 40;
console.log(yujin2.age);
console.log(Object.getOwnPropertyDescriptor(yujin2, 'age'));

Object.defineProperty(yujin2, 'height', {
  value: 160,
  writable: false,
  enumerable: true,
  configurable: false,
});

console.log(yujin2);
console.log(Object.getOwnPropertyDescriptor(yujin2, 'height'));

yujin2.height = 199;
console.log(yujin2.height); // 160

/**
 * Enumerable
 */

for (const key in yujin2) {
  console.log(key);
}

console.log('----------');

Object.defineProperty(yujin2, 'year', {
  enumerable: false,
});

for (const key in yujin2) {
  console.log(key);
}
