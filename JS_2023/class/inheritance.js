class IdolMember {
  constructor(name, groupName, age) {
    this.name = name;
    this.groupName = groupName;
    this.age = age;
  }
}

class MaleIdolMember extends IdolMember {
  goToArmy() {
    console.log(`${this.name} is going to army.`);
  }
}

class FemaleIdolMember extends IdolMember {
  getPregnant() {
    console.log(`${this.name} is pregnant.`);
  }
}

const sota = new MaleIdolMember('sota', 'KKK', 25);
sota.goToArmy();
// sota.getPregnant(); //! Error: sota.getPregnant is not a function

const suzume = new FemaleIdolMember('suzume', 'SSS', 20);
suzume.getPregnant();
// suzume.goToArmy(); //! Error: suzume.goToArmy is not a function

console.log(sota instanceof IdolMember); // true
console.log(sota instanceof MaleIdolMember); // true
console.log(sota instanceof FemaleIdolMember); // false

console.log(suzume instanceof IdolMember); // true
console.log(suzume instanceof MaleIdolMember); // false
console.log(suzume instanceof FemaleIdolMember); // true
