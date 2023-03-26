const testObj = {};

// __proto__는 모든 객체에 존재하는 프로퍼티이다.
// class의 상속에서 부모 클래스에 해당하는 값이다.

console.log(testObj.__proto__);

function IdolMember(name, year) {
  this.name = name;
  this.year = year;
}

console.log(IdolMember.prototype);

//? 숨겨진 프로퍼티까지 확인하기
console.dir(IdolMember.prototype, {
  showHidden: true,
});

// circular reference
console.log(IdolMember.prototype.constructor === IdolMember);
console.log(
  IdolMember.prototype.constructor.prototype === IdolMember.prototype,
);

const yujin = new IdolMember('Yujin', 2003);

console.log(yujin.__proto__);
console.log(yujin.__proto__ === IdolMember.prototype);

console.log(testObj.__proto__ === Object.prototype);

console.log(IdolMember.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(IdolMember.prototype.__proto__ === Object.prototype);

console.log(yujin.toString());
console.log(Object.prototype.toString());

function IdolMember2(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `Hello, I'm ${this.name}`;
  };
}

const yujin2 = new IdolMember2('Yujin', 2003);
const wonyoung2 = new IdolMember2('WonYoung', 2003);

console.log(yujin2.sayHello());
console.log(wonyoung2.sayHello());
console.log(yujin2.sayHello === wonyoung2.sayHello);

//? hasOwnProperty: 상속받은 프로퍼티라면 false
console.log(yujin2.hasOwnProperty('sayHello'));

function IdolMember3(name, year) {
  this.name = name;
  this.year = year;
}

IdolMember3.prototype.sayHello = function () {
  return `Hello, I'm ${this.name}`;
};

const yujin3 = new IdolMember3('Yujin', 2003);
const wonyoung3 = new IdolMember3('WonYoung', 2003);

console.log(yujin3.sayHello());
console.log(wonyoung3.sayHello());
console.log(yujin3.sayHello === wonyoung3.sayHello); // true
console.log(yujin3.hasOwnProperty('sayHello')); // false (상속받은 프로퍼티)

// Static method

IdolMember3.sayStaticHello = function () {
  return "Hello, I'm static";
};

console.log(IdolMember3.sayStaticHello());

//? Overriding

function IdolMember4(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `Hello, I'm instance method.`;
  };
}

IdolMember4.prototype.sayHello = function () {
  return `Hello, I'm prototype method.`;
};

const yujin4 = new IdolMember4('Yujin', 2003);

console.log(yujin4.sayHello()); // instance method

/**
 * getPrototypeOf, setPrototypeOf
 *
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 *
 */

function IdolMember(name, year) {
  this.name = name;
  this.year = year;
}

IdolMember.prototype.sayHello = function () {
  return `Hello, I'm ${this.name}`;
};

function FemaleIdolMember(name, year) {
  this.name = name;
  this.year = year;

  this.dance = function () {
    return `${this.name} is dancing`;
  };
}

const gaEul = new IdolMember('GaEul', 2004);
const ray = new FemaleIdolMember('Ray', 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolMember.prototype);
console.log(Object.getPrototypeOf(gaEul) === IdolMember.prototype);

console.log(gaEul.sayHello());
console.log(ray.dance());
console.log(Object.getPrototypeOf(ray) === FemaleIdolMember.prototype);
// console.log(ray.sayHello());0 //? error

Object.setPrototypeOf(ray, IdolMember.prototype);
console.log(ray.dance());
console.log(ray.sayHello()); // OK

console.log(ray.constructor === FemaleIdolMember); // false
console.log(ray.constructor === IdolMember); // true
console.log(gaEul.constructor === IdolMember); // true
console.log(Object.getPrototypeOf(ray) === IdolMember.prototype); // true
console.log(Object.getPrototypeOf(ray) === FemaleIdolMember.prototype); // false
console.log(FemaleIdolMember.prototype === IdolMember.prototype);

FemaleIdolMember.prototype === IdolMember.prototype;

const eSeo = new FemaleIdolMember('ESeo', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolMember.prototype);
console.log(FemaleIdolMember.prototype === IdolMember.prototype);
