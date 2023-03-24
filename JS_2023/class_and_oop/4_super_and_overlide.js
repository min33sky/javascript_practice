class IdolMember {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, I'm ${this.name}. I'm ${this.age} years old.`;
  }
}

class FemailIdolMember extends IdolMember {
  part;

  constructor(name, age, part) {
    super(name, age);
    this.part = part;
  }

  sayHello() {
    // console.log(
    //   `Hello, I'm ${this.name}. I'm ${this.age} years old. I'm a ${this.part}.`,
    // );
    console.log(`${super.sayHello()} I'm a ${this.part}`);
  }
}

const yujin = new FemailIdolMember('Yujin', 20, 'vocal');
yujin.sayHello();
