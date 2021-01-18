function Marsupial(name, nocturnal) {
  if (!(this instanceof Marsupial)) {
    throw new Error('이 객체는 new를 사용하여 생성해야 한다.');
  }
  this.name = name;
  this.isNocturnal = nocturnal;
}

Marsupial.prototype.isAwake = function(isNight) {
  return isNightTime === this.isNocturnal;
};

function Kangaroo(name) {
  if (!(this instanceof Kangaroo)) {
    throw new Error('이 객체는 new를 사용하여 생성해야 한다.');
  }
  this.name = name;
  this.isNocturnal = false;
}

Kangaroo.prototype = new Marsupial(); // 프로토타입을 Marsupial 인스턴스로 교체
Kangaroo.prototype.hop = function() {
  return this.name + ' 가 껑충 뛰었어요!';
};

let jester = new Kangaroo('제스터');
console.log(jester.name);

let isNightTime = false;
console.log(jester.isAwake(isNightTime));
console.log(jester.hop());

console.log(jester instanceof Kangaroo);
console.log(jester instanceof Marsupial);
