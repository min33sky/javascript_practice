function Marsupial(name, nocturnal) {
  if (!(this instanceof Marsupial)) {
    return new Marsupial(name, nocturnal);
  }

  this.name = name;
  this.isNocturnal = nocturnal;
}

let slider = Marsupial('슬라이더', false);

console.log(slider.isNocturnal);
console.log(slider.name);
