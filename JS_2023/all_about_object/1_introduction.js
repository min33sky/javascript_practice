/**
 * All about objects
 *
 * 객체를 선언할 때 사용할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - class와 OOP
 * 3) function을 사용하여 객체 생성
 */

// 1) object를 생성해서 객체 생성 - 기본기 {}
const yujin = {
  name: 'Yujin',
  age: 20,
};

console.log(yujin);

// 2) class를 인스턴스화해서 생성 - class와 OOP
class IdolMember {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const jimin = new IdolMember('jimin', 25);
console.log(jimin);

// 3) function을 사용하여 객체 생성
function IdolMember2(name, age) {
  this.name = name;
  this.age = age;
}

const sota = new IdolMember2('sota', 25);
console.log(sota);
