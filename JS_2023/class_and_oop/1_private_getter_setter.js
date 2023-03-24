class IdolMember {
  // # : private field (ES2022부터 지원)
  #name;
  #groupName;

  constructor(name, groupName, age) {
    this.#name = name;
    this.#groupName = groupName;
    this.age = age;
  }

  get name() {
    return this.#name;
  }

  get groupName() {
    return this.#groupName;
  }
}

const jimin = new IdolMember('jimin', 'BTS', 25);
console.log(jimin); //? IdolMember { age: 25 } -> #name, #groupName은 private field이기 때문에 출력되지 않음
// console.log(jimin.#name); //! Error: Private field '#name' must be declared in an enclosing class
console.log(jimin.name); // jimin
console.log(jimin.groupName); // BTS
