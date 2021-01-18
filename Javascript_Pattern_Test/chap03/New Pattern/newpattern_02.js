function Marsupial(name, nocturnal) {
  if (!(this instanceof Marsupial)) {
    throw new Error('이 객체는 new를 사용하여 생성해야 한다.');
  }

  this.name = name;
  this.isNocturnal = nocturnal;
}

let slider = Marsupial('슬라이더', false);

console.log(slider.isNocturnal);
console.log(slider.name);
