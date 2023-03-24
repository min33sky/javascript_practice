/**
 * Immutable Object
 */

const yujin = {
  name: 'Yujin',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(yujin);

// Extensible

console.log(Object.isExtensible(yujin));
Object.preventExtensions(yujin);
console.log(Object.isExtensible(yujin));

yujin['height'] = 160; // 무시됨
console.log(yujin);

delete yujin['name']; // 삭제는 가능
console.log(yujin);

// Sealed

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

console.log(Object.isSealed(yujin2));
Object.seal(yujin2);
console.log(Object.isSealed(yujin2));

yujin2['height'] = 160; // 무시됨
console.log(yujin2);

delete yujin2['name']; // 삭제 불가
console.log(yujin2);

yujin2['name'] = 'Yujin2'; // 변경 가능
console.log(yujin2);

// Frozen

const yujin3 = {
  name: 'Yujin',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(Object.isFrozen(yujin3));
Object.freeze(yujin3);
console.log(Object.isFrozen(yujin3));

yujin3['height'] = 160; // 무시됨
console.log(yujin3);

delete yujin3['name']; // 삭제 불가
console.log(yujin3);

yujin3['name'] = 'Yujin2'; // 변경 불가
console.log(yujin3);

//! Frozen을 사용해도 2단계 이상의 객체는 변경이 가능하다.
const yujin4 = {
  name: 'Yujin',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },

  address: {
    city: 'Seoul',
    country: 'Korea',
  },
};

console.log(Object.isFrozen(yujin4));
Object.freeze(yujin4);
console.log(Object.isFrozen(yujin4));

yujin4['height'] = 160; // 무시됨
console.log(yujin4);

yujin4.address.city = 'Busan'; // 변경 가능
console.log(yujin4);
