function Marsupial(name, nocturnal) {
  this.name = name;
  this.isNocturnal = nocturnal;
}

let maverick = new Marsupial('매버릭', true);
let slider = new Marsupial('슬라이더', false);

console.log(maverick.isNocturnal);
console.log(maverick.name);
console.log(slider.isNocturnal);
console.log(slider.name);
